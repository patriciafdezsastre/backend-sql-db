import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Mapa google maps
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { mapStyle } from './mapStyle';

// Geolocalización usuarios
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';

export function encurso({ navigation, route }) {
    const user_id = route.params.id;
    const isAdmin = route.params.isAdmin;
    const id = route.params.id;
    let viaje_id;
    const [saldos, setSaldos] = useState("");
    const [response, setResponse] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getCurrentLocation()
            if (response.status) {
                //setLocationMapa(response.location)
                console.log(response.location)
            }
        })()
    }, []);

    const initMin = 0;
    const initSec = 0;
    const [min, setMin] = useState(initMin);
    const [sec, setSec] = useState(initSec);
    useEffect(() => {
        let interv = setInterval(() => {
            if (sec === 59) {
                setMin(min + 1);
                setSec(0);
            } else {
                setSec(sec + 1);
            }
        }, 1000);
        return () => {
            clearInterval(interv);
        };
    });

    // get cambia el estado a libre
    async function changeLibre() {
        try {
            const res = await axios.get("http://172.20.10.2:8080/api/v1/vehiculo/" + id + "/" + user_id);
            console.log("user id:" + user_id);
            viaje_id = res.data.id;
            console.log(viaje_id);
            navigation.navigate("resumen", { id: viaje_id });

        } catch (error) {
            console.log("error ", error);
        }
    }

    function getLocation() {
        setResponse(getCurrentLocation());
        if (response.status) {
            console.log("esto es: "+response.location)
        }
    }

    function isZona() {
        if (response.location.latitude > 40, 485568 || response.location.latitude < 40, 383158 || response.location.longitude > -3, 660211 || response.location.longitude < -3, 751117) {
            alert("Estás fuera de la zona permitida.")
        }
        else {
            axios.get("http://172.20.10.2:8080/api/v3/zona/" + res.location.latitude + "/" + res.location.longitude)
                .then(res => {
                    if (res.data == true) {
                        axios.get("http://172.20.10.2:8080/api/v2/user/saldo/" + user_id)
                            .then(res => setSaldos(res.data.saldo)
                            )
                            .catch(error => {
                                alert("Error" + error)
                            })
                        var s = saldos + 1;
                        setSaldos(s);

                        axios.put("http://172.20.10.2:8080/api/v2/user/saldo/" + user_id + "/" + saldos)
                            .then(alert("Todo bien"))
                            .catch(error => { alert("Error" + error) })
                    }
                })
                .catch(error => { alert("Error" + error) })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
                <Text style={styles.texto}>Viaje en curso</Text>
                <Text style={styles.texto}>{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</Text>
            </View>

            <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 40.45315837994751,
                    longitude: -3.7266484767199968,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
                showsUserLocation={true}
            >
                <TouchableHighlight style={styles.button} onPress={() => { changeLibre(); getLocation(); isZona() }}>
                    <Text style={styles.textButton}>Finalizar</Text>
                </TouchableHighlight>
            </MapView>
        </View>
    );
};

//GEOLOCALIZACIÓN DE LOS USUARIOS
export const getCurrentLocation = async () => {
    const response = { status: false, location: null }
    const resultPermissions = await Permissions.askAsync(Permissions.LOCATION)
    if (resultPermissions.status === "denied") {
        alert("Debes dar permisos para la localización.")
        return response
    }
    const position = await Location.getCurrentPositionAsync({})
    const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    response.status = true
    response.location = location
    return response
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'space-around',
        // padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        //   height: Dimensions.get('window').height,
        height: 600
    },
    marker: {
        width: 500
    },
    profiles: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    admin: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    conTexto: {
        top: 5,
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 30,
        left: 10
    },
    button: {
        alignSelf: 'center',
        width: 250,
        height: 60,
        top: Dimensions.get("window").height * 0.6,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    textButton: {
        color: '#333333',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 35
    }
});
export default encurso;