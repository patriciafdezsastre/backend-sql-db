import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';
export function Bike({ navigation, route }) {
    const id = route.params.id;
    const tipo = route.params.tipo;
    const user_id = route.params.user_id;
    const isAdmin = route.params.isAdmin;

    const [loading, setLoading] = useState(true);
    const [vehiculo, setVehiculo] = useState();
    const [precio, setPrecio] = useState();
    const [isFotoAlready, setIsFotoAlready] = useState(null);

    // get info
    useEffect(() => {
        let isApiSubscribed = true;
        axios.get("http://172.20.10.2:8080/api/v1/vehiculo/" + id).then((response) => {
            if (isApiSubscribed) {
                setVehiculo(response.data);
                console.log(vehiculo);
                setLoading(false);
            }
        });
        axios.get("http://172.20.10.2:8080/api/v1/tarifas/" + tipo).then((response) => {
            if (isApiSubscribed) {
                setPrecio(response.data);
            }
        })
        axios.get("http://172.20.10.2:8080/api/v1/fotos/" + id).then((response) => {
            if (isApiSubscribed) {
                setIsFotoAlready(response.data);
            }
        })
        return () => {
            isApiSubscribed = false;
        }
    }, []);
    const changeUsado = async () => {
        try {
            const res = await axios.put("http://172.20.10.2:8080/api/v1/vehiculo/" + id);
        } catch (error) {
            console.log("error ", error);
        }
    }
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
                <View style={styles.bike}>
                    <Image style={{ top: 20, left: 20, width: 150, height: 150, alignItems: 'center' }} source={require('../assets/bike.png')} />
                    <View style={styles.info}>
                        {vehiculo.aparcadoOk ? <Text></Text> :
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 25, height: 25 }} source={require('../assets/mal.png')} />
                                <Text style={styles.mal}>¡Mal aparcado!</Text>
                            </View>
                        }
                        <Text style={styles.texto}>Distancia: XXX</Text>
                        <Text style={styles.texto}>Precio: {precio} €/min</Text>
                    </View>
                    {(!vehiculo.aparcadoOk || isFotoAlready || isAdmin) ? null : <View>
                        <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate("malAparcado", { id: id, tipo: tipo, user_id: user_id, isAdmin: isAdmin }) }}>
                            <Text style={styles.textButton}>¿Mal aparcado?</Text>
                        </TouchableHighlight>
                    </View>
                    }
                    <TouchableHighlight style={styles.button} onPress={() => {
                        navigation.navigate("encurso", { id: id });
                        changeUsado();
                    }}>
                        <Text style={styles.textButton}>Utilizar</Text>
                    </TouchableHighlight>
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
    bike: {
        backgroundColor: '#FEFAE0',
        height: 700
    },
    info: {
        // left: 70,
        alignItems: 'center',
        top: 70,
        marginBottom: 20
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        alignSelf: 'flex-start',
        left: 20,
        top: 20
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
    },
    mal: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        color: '#F9C74F',
        left: 5,
        alignItems: 'center'
    }
});
export default Bike;