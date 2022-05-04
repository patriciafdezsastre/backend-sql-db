import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {BarCodeScanner} from 'expo-barcode-scanner';

export function QR(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(()=> {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) =>{
        setScanned(true);
        alert(`Bar Code With Type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`);
    }
    if (hasPermission === null){
        return  <Text>Requesting for Camera Permission</Text>
    }
    if (hasPermission === false){
        return <Text>No Access to Camera</Text>
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
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("encurso")}>
                <Text style={styles.textButton}>Utilizar</Text>
            </TouchableHighlight>

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
        // top: 170,
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
export default QR;