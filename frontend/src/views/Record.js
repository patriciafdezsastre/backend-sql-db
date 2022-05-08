import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { MARKERS_DATA } from './Markers';

//<Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/sad.png')} />

export function Record(props) {
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
                    <Text style={styles.texto}>Información sobre el Usuario </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.texto}>Número de Viajes: </Text>
                    <Text style={styles.texto}>Créditos conseguidos: </Text>
                </View>
                <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("ListaViajes")}>
                    <Text style={styles.textSU}>Viajes</Text>
                </TouchableHighlight>
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
        top: 70,
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
export default Record;