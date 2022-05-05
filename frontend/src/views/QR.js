import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export function QR(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [vehiculo, setVehiculo] = useState();
    const [tipoVehiculo, setTipoVehiculo] = useState();

    const getVehiculo = async (id) => {
        try {
            const res = await axios.get("http://192.168.31.213:8080/api/v1/vehiculo/"+id);
            console.log(res.data);
            setVehiculo(res.data);
            const tipo = vehiculo.map(x => { console.log(x.tipo); return x.tipo});
            setTipoVehiculo(tipo);
        } catch (error) {
            console.log("error", error);
        }
    };

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanner = ({ type, data }) => {
        setScanned(true);
        console.log('Type: ' + type + '\nData: ' + data)
        getVehiculo(data);
        tipoVehiculo === 'bike' ? 
            props.navigation.navigate("Bike", { id: data }) : 
            props.navigation.navigate("Patinete", { id: data});
    }

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Requesting for camera permission</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style ={styles.texto}>No access to camera</Text>
                <TouchableHighlight style={styles.button} onPress={() => askForCameraPermission()}>
                    <Text style={styles.textButton}>Allow Camera</Text>
                </TouchableHighlight>
            </View>
        )
    }

    // Return the view
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>
            <View style={styles.content}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
                    style={styles.qr} />
                <Text style={styles.texto}>Aún no se ha escaneado nada</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    texto: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        top: 100,
    },
    content: {
        alignItems: 'center'
    }, 
    qr: {
        top:50,
        height: 300, 
        width: 300, 
        alignContent: 'center'
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
export default QR;