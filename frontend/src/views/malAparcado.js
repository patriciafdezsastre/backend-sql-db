import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

export function malAparcado(props) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [taken, setTaken] = useState(false);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
            setTaken(true);
        }
    }

    const repeatPicture = async () => {
        setTaken(false);
    }
    if (hasCameraPermission === false) {
        return <Text>No Camera Access</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View >

            <View style={{ flex: 1 }}>
                {taken ?
                    <View style={styles.takenPicture}>
                        <Image source={{ uri: image }} style={{ height: 450 }} />
                        <TouchableHighlight style={styles.button} onPress={() => { repeatPicture(); }}>
                            <Text style={styles.textButton}>Repetir imagen</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button} onPress={() => { }}>
                            <Text style={styles.textButton}>Enviar</Text>
                        </TouchableHighlight>
                    </View> : <View style={styles.notYet}>
                        <View style={styles.cameraContainer}>
                            <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={Camera.Constants.Type.back} ratio={'1:1'} />
                        </View>
                        <TouchableHighlight style={styles.buttonTake} onPress={() => { takePicture() }}>
                            <Text style={styles.textButton}>Take picture</Text>
                        </TouchableHighlight>
                    </View>
                }
                {/* 
                <TouchableHighlight style={styles.button} onPress={() => {
                    props.navigation.navigate("FotoEnviada");
                }}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableHighlight> */}

            </View>
        </View >
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
    takenPicture: {
        justifyContent: 'space-around'
    }
});
export default malAparcado;