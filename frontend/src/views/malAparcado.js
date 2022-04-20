import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import MyButton from './my_button';

export function malAparcado(props) {
    
    return (
        <View>
            <Image style={{ width: 250, height: 250, alignItems: 'center' }} source={require('../assets/def.png')} />
            <Text>Hi-Go!</Text>

            <MyButton
                // onPress={() => props.navigation.navigate("QR")}
                text={"Capturar"} />
        </View>
    );
};

export default malAparcado;