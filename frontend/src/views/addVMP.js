import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet, Dimensions, Alert } from 'react-native';

export function addVMP(props) {
    const [type, setType] = useState(null);
    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);
    const [libre, setLibre] = useState(null);
    const [aparcadoOK, setAparcadoOK] = useState(null);

    const addVMP = async () => {
        try {
            const res = await axios.post("http://172.20.10.2:8080/api/v1/vehiculo/"+type+"/"+latitud+"/"+longitud+"/"+libre+"/"+aparcadoOK);
            // console.log(res.status);
            if (res.status === 200) {
                Alert.alert('Vehículo añadido', ' ', [
                    {text: 'Ok', onPress: () => props.navigation.navigate("Admin")}
                ])
            }
        } catch (error) {
            console.log("error ", error);
        }
    };

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
                    <Text style={styles.texto}>Tipo de VMP:</Text>
                    {type === null ?
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={styles.button} onPress={() => setType("bike")}>
                                <Text style={styles.textButton}>Bicicleta</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button} onPress={() => setType("patinete")}>
                                <Text style={styles.textButton}>Patinete</Text>
                            </TouchableHighlight>
                        </View> : type === "bike" ?
                            <Text style={styles.texto2}>Bicicleta</Text> : <Text style={styles.texto2}>Patinete</Text>
                    }


                    <Text style={styles.texto}>Ubicación:</Text>
                    <TextInput
                        style={{ height: 40, fontSize: 25, color: '#84a98c', backgroundColor: '#fefae0', borderRadius: 10, top: 5, bottom: 15 }}
                        placeholder="Latitud..."
                        // value={valueTextInput}
                        onChangeText={(text) => setLatitud(text)}
                    />
                    <TextInput
                        style={{ height: 40, fontSize: 25, color: '#84a98c', backgroundColor: '#fefae0', borderRadius: 10, top: 5, bottom: 15 }}
                        placeholder="Longitud..."
                        // value={valueTextInput}
                        onChangeText={(text) => setLongitud(text)}
                    />

                    <Text style={styles.texto}>¿Está disponible?:</Text>
                    {libre === null ?
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={styles.button} onPress={() => setLibre(true)}>
                                <Text style={styles.textButton}>Sí</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button} onPress={() => setLibre(false)}>
                                <Text style={styles.textButton}>No</Text>
                            </TouchableHighlight>
                        </View> : libre === true ?
                            <Text style={styles.texto2}>Sí</Text> : <Text style={styles.texto2}>No</Text>
                    }

                    <Text style={styles.texto}>¿Está bien aparcado?:</Text>
                    {aparcadoOK === null ?
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight style={styles.button} onPress={() => setAparcadoOK(true)}>
                                <Text style={styles.textButton}>Sí</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button} onPress={() => setAparcadoOK(false)}>
                                <Text style={styles.textButton}>No</Text>
                            </TouchableHighlight>
                        </View> : aparcadoOK === true ?
                            <Text style={styles.texto2}>Sí</Text> : <Text style={styles.texto2}>No</Text>
                    }
                    
                    {(type != null && latitud != null && longitud != null && libre != null && aparcadoOK != null) ?
                        <TouchableHighlight style={styles.buttonSubmit} onPress={() => addVMP()}>
                            <Text style={styles.textButton}>Añadir vehículo</Text>
                        </TouchableHighlight> : null
                    }
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
        left: 5
    },
    texto2: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#84A98C',
        top: 10,
        left: Dimensions.get('window').width * 0.3,
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
    }
});
export default addVMP;