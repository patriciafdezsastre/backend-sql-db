import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
import { default as Bici } from '../assets/vmps/BiciDisp.png';
import { default as BiciNo } from '../assets/vmps/BiciNoDisp.png';
import { default as Patinete } from '../assets/vmps/patineteDisp.png';
import { default as PatineteNo } from '../assets/vmps/patineteNoDisp.png';

export function deletingVMP({ navigation, route }) {
    const id = route.params.id;
    const [vehiculo, setVehiculo] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/vehiculo/" + id).then((response) => {
            if (isApiSubscribed) {
                setVehiculo(response.data);
                setLoading(false);
            }
        });
        return () => {
            isApiSubscribed = false;
        }
    }, []);

    const deleteVMP = async () => {
        try {
            const res = await axios.delete("http://172.20.10.2:8080/api/v1/vehiculo/" + id);
            // console.log(res.status);
            if (res.status === 200) {
                Alert.alert('Vehículo eliminado', ' ', [
                    { text: 'Ok', onPress: () => navigation.navigate("Admin") }
                ])
            }
        } catch (error) {
            console.log("error ", error);
        }
    };

    if (loading) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>
            <View style={styles.user}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                    {vehiculo.tipo === "bike" ?
                        <Image style={{ top: 20, left: 20, width: 150, height: 100, alignItems: 'center' }} source={
                            vehiculo.libre ? Bici : BiciNo
                        } /> :
                        <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={
                            vehiculo.libre ? Patinete : PatineteNo
                        } />}
                    {vehiculo.tipo === "bike" ? <Text style={styles.texto}>Bicicleta</Text> : <Text style={styles.texto}>Patinete</Text>}

                </View>
                <View style={styles.info}>
                    <View style={styles.bike}>
                        {vehiculo.libre ? <Text style={styles.texto}>Disponible</Text> : <Text style={styles.texto}>No disponible</Text>}
                        {vehiculo.aparcadoOk ? <Text></Text> :
                            <Text style={styles.mal}>¡Mal aparcado!</Text>
                        }
                        <Text style={styles.texto2}>Ubicación: {vehiculo.latitud}, {vehiculo.longitud}</Text>
                    </View>
                    <TouchableHighlight style={styles.button} onPress={() => deleteVMP()}>
                        <Text style={styles.textButton}>Eliminar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        backgroundColor: '#333333',
        height: 700
    },
    info: {
        top: 50,
        marginBottom: 20,
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#fefae0',
        top: 10,
        left: 17
    },
    texto2: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#fefae0',
        top: 10,
        marginLeft: 17
        // left: Dimensions.get('window').width * 0.3,
    },
    button: {
        alignSelf: 'center',
        // width: 150,
        width: Dimensions.get('window').width * 0.45,
        left: 5,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        top: 35
    },
    textButton: {
        color: '#333333',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 35
    },
    buttonSubmit: {
        alignSelf: 'center',
        // width: 150,
        // width: Dimensions.get('window').width * 0.45,
        left: 5,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        top: 15
    },
    mal: {
        // marginBottom: 5,
        color: '#F9C74F',
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        top: 10,
        marginLeft: 17
    }
});
export default deletingVMP;