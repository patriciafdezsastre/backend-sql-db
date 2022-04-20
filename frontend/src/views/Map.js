import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';

// Mapa google maps
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { mapStyle } from './mapStyle';
import { MARKERS_DATA } from './Markers';
import { default as Bike } from '../assets/bikeMap.png';

export function Map(props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
                <TouchableHighlight onPress={() => props.navigation.navigate("User")}>
                    <Image style={{ width: 50, height: 50, alignItems: 'center' }} source={require('../assets/Avatar.png')} />
                </TouchableHighlight>
            </View>

            <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 40.45315837994751,
                    longitude: -3.7266484767199968,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
            >
                {MARKERS_DATA.map((marker) => (
                    <Marker
                        key={marker.idveh}
                        coordinate={{
                            latitude: marker.ubicacion[0],
                            longitude: marker.ubicacion[1],
                        }}
                        onPress= {() => marker.libre? (marker.tipo === Bike ? props.navigation.navigate("Bike") : props.navigation.navigate("Patinete")): props.navigation.navigate("noDisponible")}
                        // onPress={() => marker.tipo === Bike ? props.navigation.navigate("Bike") : props.navigation.navigate("Patinete")}
                        style={styles.marker}
                        // opacity={marker.libre ? 1.0 : 0.0}
                    >
                        <View style={{ width: 50 }}>
                            <Image source={marker.tipo} />
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'space-around',
        // padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        //   height: Dimensions.get('window').height,
        height: 700
    },
    marker: {
        width: 500
    }
});

export default Map;