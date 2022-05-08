import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Buffer } from "buffer";

export function malAparcado({ navigation, route }) {
    const id = route.params.id;
    const tipo = route.params.tipo;
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagen64, setImagen64] = useState(null);
    const [imagenByte, setImagenByte] = useState(null);

    useEffect(() => {
        (async () => {
            // Ask the user for the permission to access the camera
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
            if (permissionResult.granted === false) {
                alert("You've refused to allow this appp to access your camera!");
                return;
            }
            // const result = await ImagePicker.launchCameraAsync({ base64: true });
            const result = await ImagePicker.launchCameraAsync({ base64: true });
            // Explore the result
            // console.log(result);
            if (!result.cancelled) {
                setPickedImagePath(result.uri);
                setImagen(result);
                setImagen64(result.base64);
                console.log(result.uri);
            }
            if (result.cancelled) {
                tipo === "bike" ?
                    navigation.navigate("Bike", { id: id, tipo: tipo }) :
                    navigation.navigate("Patinete", { id: id, tipo: tipo });
            }
        })();
    }, []);

    function imageUriToByteArray(image) {
        return new Promise((resolve, reject) => {
            try {
                let reader = new FileReader();
                let fileByteArray = [];
                reader.readAsArrayBuffer(image);

                /*                 fileToArrayBuffer(image).then((data) => {
                                    let arrayBuffer = data, array = new Uint8Array(arrayBuffer);
                                    for (const byte of array) {
                                        fileByteArray.push(byte);
                                    }
                                    resolve(fileByteArray);
                                }) */

                reader.onload = function () {
                    let arrayBuffer = reader.result, array = new Uint8Array(arrayBuffer);
                    for (const byte of array) {
                        fileByteArray.push(byte);
                    }
                    resolve(fileByteArray);
                };
                // var xhr = new XMLHttpRequest();
                // xhr.open("GET", pickedImagePath);
                // xhr.responseType = "arraybuffer";
                // xhr.onload = function () {
                //     // if (xhr.status===200) console.log(new Uint8Array(xhr.response));
                //     if (xhr.status === 200) {
                //         setImagenByte(new Uint8Array(xhr.response));

                //     }
                // };
                // xhr.send();
            } catch (error) {
                reject(error);
            }
        })
    }
    const porfavorfunciona = async () => {
        let your_bytes = Buffer.from(imagen64, "base64");
        setImagenByte(your_bytes);
        const response = await fetch (pickedImagePath);
        const dat = await response.blob();
        const filename = pickedImagePath.split('/').pop();
        const ext = pickedImagePath.split('.').pop();
        const metadata = `image/${ext}`;
        const uri = URL.createObjectURL(dat);

        let formData = new FormData();
        formData.append('imagen', {
            uri: uri,
            name: filename,
            type: metadata,
        });
        console.log(formData);

        // formData.append('imagen', your_bytes);
        // const res = await axios.put("http://172.20.10.2:8080/api/v1/fotos/"+formData);
        // const res = await axios({method: 'post',
        //                         url: 'http://172.20.10.2:8080/api/v1/fotos',
        //                         data: {
        //                             image: filename
        //                         }});

        // const res = await axios.put("http://172.20.10.2:8080/api/v1/fotos/");
        const res = await axios.put('uri', formData, {
            baseURL: "http://172.20.10.2:8080/api/v1/fotos/"+uri,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    const sendPicture = async () => {
        try {
            // let data = new FormData();
            // data.append('user_id', 3245);
            // data.append('vehiculo_id', id);
            // data.append('image', pickedImagePath);
            // const res = await axios.put("http://172.20.10.2:8080/api/v1/fotos/"+"3245"+"/"+id+"/"+pickedImagePath);
            // const response = await fetch(pickedImagePath);
            // const blob = await response.blob();
            // let imageByte = imagen === '' ? null : imageUriToByteArray(imagen);
            porfavorfunciona();
            const res = await axios.post('uri', formData, {
                baseURL: baseURL,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // let your_bytes = Buffer.from(pickedImagePath, "base64");
            // console.log(your_bytes);
            // const res = await axios.put("http://172.20.10.2:8080/api/v1/fotos/" + "3245" + "/" + id + "/" + your_bytes);
            
            // var ref = firebase.storage().ref().child("image.jpg");
            // return ref.put(blob);
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
            {/* <Image style={{ height: 500 }} source={{ uri: 'data:image/jpeg;base64,' + image64 }} /> */}
            <Image style={{ height: 500 }} source={{ uri: pickedImagePath }} />
            <TouchableHighlight style={styles.button} onPress={() => { porfavorfunciona(); }}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableHighlight>
            {/* <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={{uri: pickedImagePath}}/> */}
            {/* 
            <View style={{ flex: 1 }}>
                {taken ?
                    <View style={styles.takenPicture}>
                        <Image source={{ uri: image }} style={{ height: 450 }} />
                        <TouchableHighlight style={styles.button} onPress={() => { repeatPicture(); }}>
                            <Text style={styles.textButton}>Repetir imagen</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button} onPress={() => { sendPicture(); }}>
                            <Text style={styles.textButton}>Enviar</Text>
                        </TouchableHighlight>
                    </View> : <View style={styles.notYet}>
                        <View style={styles.cameraContainer}>
                            <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={Camera.Constants.Type.back} ratio={'1:1'} />
                        </View>
                        <TouchableHighlight style={styles.buttonTake} onPress={() => { takePicture() }}>
                            <Text style={styles.textButton}>Capturar</Text>
                        </TouchableHighlight>
                    </View> */}
            {/* } */}
            {/* {console.log(image)} */}
            {/* 
                <TouchableHighlight style={styles.button} onPress={() => {
                    props.navigation.navigate("FotoEnviada");
                }}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableHighlight> */}

            {/* </View> */}
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
    // takenPicture: {
    //     justifyContent: 'space-around'
    // }
});
export default malAparcado;