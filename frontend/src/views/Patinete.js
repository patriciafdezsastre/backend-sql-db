import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

export function Patinete({ navigation, route }) {
    const id = route.params.id;
    const tipo = route.params.tipo;

    const [loading, setLoading] = useState(true);
    const [vehiculo, setVehiculo] = useState();
    const [precio, setPrecio] = useState();

    // get info
    useEffect(() => {
        const getVehiculo = async () => {
            try {
                const res = await axios.get("http://192.168.31.213:8080/api/v1/vehiculo/" + id);
                console.log(res.data);
                setVehiculo(res.data);
            } catch (error) {
                console.log("error", error);
            }
        };
        const getPrecio = async () => {
            try {
                const res = await axios.get("http://192.168.31.213:8080/api/v1/tarifas/" + tipo);
                setPrecio(res.data);
                setLoading(false);
            } catch (error) {
                console.log("error ", error);
            }
        }
        getVehiculo();
        getPrecio();
    }, []);

    if (loading) return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                    <Text
                        style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                        Hi-Go!
                    </Text>
                </View>
                <View style={styles.patin}>
                    <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/patinete.png')} />
                    <View style={styles.info}>
                        {vehiculo.aparcadoOk ? <Text></Text> :
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 25, height: 25 }} source={require('../assets/mal.png')} />
                                <Text style={styles.mal}>¡Mal aparcado!</Text>
                            </View>
                        }
                        <Text style={styles.texto}>Distancia: XXX</Text>
                        <Text style={styles.texto}>Precio: {precio} €/min</Text>

                        <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("malAparcado")}>
                            <Text style={styles.textButton}>¿Mal aparcado?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button} onPress={() => {
                            navigation.navigate("encurso");
                            changeLibre();
                        }}>
                            <Text style={styles.textButton}>Utilizar</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        );
    };
}

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
    patin: {
        backgroundColor: '#FEFAE0',
        height: 700
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
        fontFamily: 'Times New Roman',
        left: 20
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
export default Patinete;