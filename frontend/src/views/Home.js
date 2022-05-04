import React, { useEffect } from 'react';

import { View, Text, Image, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import MyButton from './my_button';

export function Home(props) {
    return (
        <View style={styles.container}>
            <Image style={{ width: 371, height: 311, alignItems: 'center' }} source={require('../assets/inicio.png')} />
            <Text
                style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 90 }}>
                Hi-Go!
            </Text>
            <TouchableHighlight style={styles.buttonSU} onPress={() => props.navigation.navigate("Signup")}>
                <Text style={styles.textSU} >Sign up</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonLI} onPress={() => props.navigation.navigate("Login")}>
                <Text style={styles.textLI}>Log in</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15
    },
    buttonSU: {
        width: 242,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        // padding: 15,
        backgroundColor: '#0567B3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSU: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    },
    buttonLI: {
        width: 242,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        // padding: 15,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLI: {
        color: '#0567B3',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});
export default Home;