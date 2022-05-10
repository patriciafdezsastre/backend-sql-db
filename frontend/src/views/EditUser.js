import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';





export function EditUser(props) {

    const [nombre, setNombre] = useState("Juan");
    const[nuevo, setNuevo] = useState("");
   // const id = route.params.id;


    // axios.get("http://192.168.1.127:8080/api/v2/user/"+ 2)
    // .then((res) => {
    //     setNombre(res.data.username);
       
    // })
    // .catch(error=>{
    //     alert("Error server "+error)
    //   })


      function Cambiar(){
          axios.put("http://172.20.10.13:8080/api/v2/user/"+id + nuevo)
          .then((res) =>{
              alert("User cambiado")
          })
          .catch(error=>{
            alert("Error server "+error)
          })
      }

      function Eliminar(){
        axios.delete("http://172.20.10.13:8080/api/v2/user/delete" +id) 
        .then((res) =>{
            alert("User eliminado")
        })
        .catch(error=>{
          alert("Error server "+error)
        })
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
            <View style={styles.user}>
                <View style={styles.info}>
                    <Text style={styles.texto}>Username: {nombre}</Text>
                    <TextInput
                       style={styles.input}
                       placeholder="Username..."
                       value={nuevo}
                       onChangeText={(text) => setNuevo(text)}
            />            
            <TouchableHighlight style={styles.button} onPress={() => Cambiar()}>
            <Text style={styles.textButton}>Cambiar</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={() => Eliminar()}>
            <Text style={styles.textButton}>Eliminar</Text>
            </TouchableHighlight>
       
            <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("Map")}>
            <Text style={styles.textButton}>Volver</Text>
            </TouchableHighlight>

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
        top: 130,
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
export default EditUser;