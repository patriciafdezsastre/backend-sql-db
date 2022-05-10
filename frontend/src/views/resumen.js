import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';

export function resumen({navigation, route}) {

    let id = route.params.id;
    const [viajeInfo, setViajeInfo] = useState();
    const [idViaje, setIdViaje] = useState(0);
    const [precioViaje, setPrecioViaje] = useState(0);

    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/viaje/"+id).then((response) => {
            if (isApiSubscribed) {
                setViajeInfo(response.data);
                setIdViaje(response.data.id);
                setPrecioViaje(response.data.coste);
            }
        })
        return () => {
            isApiSubscribed = false;
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.texto}>Resumen del viaje</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.texto}>{precioViaje}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.texto}>{idViaje}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bike: {
        backgroundColor: '#FEFAE0',
        height: 700
    },
    info: {
        left: 70,
        // top: 70,
        marginBottom: 20
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
    },
    button: {
        alignSelf: 'center',
        width: 350,
        height: 60,
        bottom: 15,
        top: 170,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    textButton: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default resumen;