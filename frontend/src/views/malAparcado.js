import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['source.uri should not be an empty string']);

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export function malAparcado({ navigation, route }) {
    const vehiculo_id = route.params.id;
    const tipo = route.params.tipo;
    const user_id = route.params.user_id;
    const isAdmin = route.params.isAdmin;
    
    const [imagen64, setImagen64] = useState(null);

    useEffect(() => {
        (async () => {
            // Ask the user for the permission to access the camera
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
            if (permissionResult.granted === false) {
                alert("You've refused to allow this app to access your camera!");
                return;
            }
            const result = await ImagePicker.launchCameraAsync({ base64: true });
            if (!result.cancelled) {
                setImagen64(result.base64);
            }
            if (result.cancelled) {
                tipo === "bike" ?
                    navigation.navigate("Bike", { id: vehiculo_id, tipo: tipo }) :
                    navigation.navigate("Patinete", { id: vehiculo_id, tipo: tipo });
            }
        })();
    }, []);

    const sendPicture = async () => {
        try {
            const res = await axios.post("http://172.20.10.2:8080/api/v1/fotos/" + user_id + "/" + vehiculo_id,
                {
                    imagen: imagen64
                });
            console.log(imagen64)
            // const res = await axios.post("http://172.20.10.2:8080/api/v1/fotos/"+33+"/"+vehiculo_id,+"/"+imagen64);
            if (res.status === 200) {
                Alert.alert('Foto enviada', 'En breve un administrador la aprobará', [
                    { text: 'Ok', onPress: () => navigation.navigate("Map", {}) }
                ])
            }
        } catch (error) {
            console.log("error ", error);
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
            {imagen64 === null ? null : <View>
                <Image style={{ height: 500 }} source={{ uri: 'data:image/jpeg;base64,' + imagen64 }} />
                <TouchableHighlight style={styles.button} onPress={() => { sendPicture() }}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableHighlight>

            </View>
            }
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
    bike: {
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
        top: 30,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    buttonTake: {
        alignSelf: 'center',
        width: 350,
        height: 60,
        bottom: 15,
        // top: 30,
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
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    },
    notYet: {
        height: 600
    },
});
export default malAparcado;