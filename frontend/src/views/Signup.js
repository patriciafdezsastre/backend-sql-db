import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';
import MyButton from './my_button';

export function Signup(props) {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>


            <TextInput
                style={styles.input}
                placeholder="Nombre..."
                value={nombre}
                onChangeText={(text) => setNombre(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos..."
                value={apellidos}
                onChangeText={(text) => setApellidos(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Número de teléfono..."
                value={telefono}
                onChangeText={(text) => setTelefono(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email..."
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña..."
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("Map")}>
                <Text style={styles.textButton}>Sign up</Text>
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
    input: {
        padding: 15,
        margin: 10,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
        // textAlign: 'center'
    },
    button: {
        alignSelf:'center',
        width: 242,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default Signup;