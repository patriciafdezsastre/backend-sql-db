import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';

export function modificarTarifas(props) {
    const [tarifaBike, setTarifaBike] = useState(null);
    const [tarifaPatinete, setTarifaPatinete] = useState(null);
    const [editBike, setEditBike] = useState(false);
    const [editPatin, setEditPatin] = useState(false);
    const [value, setNewValue] = useState(null);

    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/tarifas/bike").then((response) => {
            if (isApiSubscribed) {
                setTarifaBike(response.data);
            }
        })
        axios.get("http://172.20.10.2:8080/api/v1/tarifas/patinete").then((response) => {
            if (isApiSubscribed) {
                setTarifaPatinete(response.data);
            }
        })
        return () => {
            isApiSubscribed = false;
        }
    }, [editBike, editPatin]);

    const changeBike = async () => {
        try {
            let valueDouble = parseFloat(value);
            console.log(valueDouble);
            const res = await axios.post("http://172.20.10.2:8080/api/v1/tarifas/bike/"+valueDouble);
            setEditBike(false);
        } catch (error) {
            console.log("error", error);
        }
    };
    const changePatin = async () => {
        try {
            let valueDouble = parseFloat(value);
            console.log(valueDouble);
            const res = await axios.post("http://172.20.10.2:8080/api/v1/tarifas/patinete/"+valueDouble);
            setEditPatin(false);
        } catch (error) {
            console.log("error", error);
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
                    {editBike ? <View>
                        <Text style={styles.texto}>Tarifa bicicleta:</Text>
                        <TextInput
                            style={{ height: 60, fontSize: 30, color: '#333333', backgroundColor: '#fefae0', borderRadius: 10, top: 5, bottom: 15 }}
                            placeholder="Nueva tarifa bicicleta..."
                            // value={valueTextInput}
                            onChangeText={(text) => setNewValue(text)}
                        />
                        <TouchableHighlight style={styles.button} onPress={() => changeBike()}>
                            <Text style={styles.textButton}>Modificar</Text>
                        </TouchableHighlight>
                    </View> : <View>
                        <Text style={styles.texto}>Tarifa bicicleta: {tarifaBike} €/min</Text>
                        {editPatin ? null :
                            <TouchableHighlight style={styles.button} onPress={() => setEditBike(true)}>
                                <Text style={styles.textButton}>Editar</Text>
                            </TouchableHighlight>
                        }
                    </View>
                    }
                    {editPatin ? <View>
                        <Text style={styles.texto}>Tarifa patinete:</Text>
                        <TextInput
                            style={{ height: 60, fontSize: 30, color: '#333333', backgroundColor: '#fefae0', borderRadius: 10, top: 5, bottom: 15 }}
                            placeholder="Nueva tarifa patinete..."
                            // value={valueTextInput}
                            onChangeText={(text) => setNewValue(text)}
                        />
                        <TouchableHighlight style={styles.button} onPress={() => changePatin()}>
                            <Text style={styles.textButton}>Modificar</Text>
                        </TouchableHighlight>
                    </View> : <View>
                        <Text style={styles.texto}>Tarifa patinete: {tarifaPatinete} €/min</Text>
                        {editBike ? null :
                            <TouchableHighlight style={styles.button} onPress={() => setEditPatin(true)}>
                                <Text style={styles.textButton}>Editar</Text>
                            </TouchableHighlight>
                        }
                    </View>
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
        top: 70,
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
    button: {
        alignSelf: 'center',
        width: 350,
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
    }
});
export default modificarTarifas;