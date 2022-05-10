import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
import { default as Bici } from '../assets/vmps/BiciDisp.png';
import { default as BiciNo } from '../assets/vmps/BiciNoDisp.png';
import { default as Patinete } from '../assets/vmps/patineteDisp.png';
import { default as PatineteNo } from '../assets/vmps/patineteNoDisp.png';

export function deleteVMP(props) {
    const [loading, setLoading] = useState(true);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/vehiculos").then((response) => {
            if (isApiSubscribed) {
                setMarkers(response.data);
                setLoading(false);
            }
        });
        return () => {
            isApiSubscribed = false;
        }
    }, []);

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
            <ScrollView style={styles.user}>
                <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/admin.png')} />
                <View style={styles.info}>
                    {markers.map((marker) => (
                        <TouchableHighlight onPress={() => props.navigation.navigate("deletingVMP", {id:marker.id})}>
                            <View style={{ height: 120, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {marker.tipo === "bike" ?
                                        <Image style={{ width: 55, left: 10 }} source={
                                            marker.libre ? Bici : BiciNo
                                        } /> :
                                        <Image style={{ height: 50, width: 55, left: 10 }} source={
                                            marker.libre ? Patinete : PatineteNo
                                        } />}

                                    {marker.tipo === "bike" ? <Text style={styles.texto}>Bicicleta</Text> : <Text style={styles.texto}>Patinete</Text>}
                                    {marker.libre ? <Text style={styles.texto2}>Disponible</Text> : <Text style={styles.texto2}>No disponible</Text>}
                                    {marker.aparcadoOk ? <Text></Text> :
                                        <Text style={styles.mal}>¡Mal aparcado!</Text>
                                    }
                                </View>
                                <Text style={styles.texto2}>Ubicación: {marker.latitud}, {marker.longitud}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>
            </ScrollView>
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
        // height: 700
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
        marginLeft: 30
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
        top: 15
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
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#F9C74F',
        left: 10,
        alignItems: 'center'
    }
});
export default deleteVMP;