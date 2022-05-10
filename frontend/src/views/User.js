import { SYSTEM_BRIGHTNESS } from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

export function User({ navigation, route }) {

    const user_id = route.params.user_id;
    const isAdmin = route.params.isAdmin;
    const username = route.params.username;
    const email = route.params.email;
    const saldo = route.params.saldo;

    const [viajes, setViajes] = useState();
    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/viajes/" + user_id).then((response) => {
            if (isApiSubscribed) {

                setViajes(response.data);
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
            <View style={styles.user}>
                <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/Avatar.png')} />
                <View style={styles.info}>
                    <Text style={styles.texto}>Nombre: {username}</Text>
                    <Text style={styles.texto}>Email: {email}</Text>
                    {isAdmin ? null : <Text style={styles.texto}>Saldo: {saldo}</Text>}
                    <Text style={styles.texto}>Viajes: {viajes}</Text>
                </View>
                {isAdmin ? null :
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("EditUser", { user_id: user_id, username: username, isAdmin: isAdmin })}>
                        <Text style={styles.textButton}>Editar</Text>
                    </TouchableHighlight>
                }
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Map", { id: user_id, isAdmin: isAdmin })}>
                    <Text style={styles.textButton}>Volver</Text>
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
    }
});
export default User;