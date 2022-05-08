import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

//<Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/sad.png')} />

export function ListaViajes(props) {
    // async function viajesUser(id) {
    //     const res = await axios.put("http://192.168.0.24:8080/api/v1/vehiculo/1");
    //     console.log(res.data);
    // }
    
    //quiza moalría que pusiera la info sobre el usuario... En vez de Usuario: El nombre del Usuario.
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
                <View style={styles.info}>
                    <Text style={styles.texto}>Viajes del Usuario  </Text>
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
        backgroundColor: '#FEFAE0',
        height: 700,
        alignItems: 'center'
    },
    info: {
        // left: 70,
        top: 0,
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
        top: 130,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    textSU: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default ListaViajes;