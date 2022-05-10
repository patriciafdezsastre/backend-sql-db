import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

export function Admin(props) {

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
                <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/admin.png')} />
                <View style={styles.info}>
                    <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("Signup")}>
                        <Text style={styles.textButton} >Modificar zonas</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("modificarTarifas")}>
                        <Text style={styles.textButton}>Modificar tarifas</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("addVMP")}>
                        <Text style={styles.textButton}>Añadir VMPs</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("deleteVMP")}>
                        <Text style={styles.textButton}>Eliminar VMPs</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("Login")}>
                        <Text style={styles.textButton}>Verificar mal aparcados</Text>
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
        top: 70,
        marginBottom: 20,
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#fefae0'
    },
    button: {
        alignSelf: 'center',
        width: 350,
        height: 60,
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
    },
});
export default Admin;