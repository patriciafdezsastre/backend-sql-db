import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

export function User(props) {

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
                <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/Avatar.png')} />
                <View style={styles.info}>
                    <Text style={styles.texto}>Nombre: </Text>
                    <Text style={styles.texto}>Apellidos: </Text>
                    <Text style={styles.texto}>Email: </Text>
                    <Text style={styles.texto}>Contraseña: *****</Text>
                </View>
                
                {/* <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("EditUser")}>
                    <Text style={styles.textButton}>Editar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                    // onPress={() => props.navigation.navigate("QR")}
                    >
                    <Text style={styles.textButton}>Borrar</Text>
                </TouchableHighlight> */}
                
                <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("Record")}>
                    <Text style={styles.textSU}>Historial</Text>
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
        height: 700
    },
    info: {
        left: 70,
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
    textButton: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    },
    buttonSU: {
        width: 242,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        // padding: 15,
        backgroundColor: '#0567B3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSU: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default User;