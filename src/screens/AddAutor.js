import { View, Text, Button, StyleSheet, ScrollView, Image, SafeAreaView, TextInput, TouchableOpacity,Picker, Platform } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from 'expo-linear-gradient';
import Dropdown from 'react-native-input-select';
import { URL_BASE } from "../config/URL_BASE";

import { useState } from "react";
const AddAutor = () => {
  const data = new FormData();
  const LoadPdf = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
  };
  const handleSubmit = async () => {
    const data = {
      firts_name: "",
    };
    const url = `${URL_BASE}/gestion/archivo/create/`;
    const request = await fetch(url, {
      method: "POST",
      body: data,
    });
    const response = await request.json();
    console.log(response);


  };
  const [carrera, setCarrera] = useState("")
  return (
    <>
      {/*  <View>
        <Text>Add new file</Text>
        <Button title="Add" onClick={LoadPdf}></Button>
        <Button onClick={handleSubmit} title="Crear"></Button>
      </View> */}
      <ScrollView>

        <View style={styles.container}>
          <View style={{ backgroundColor: "#FFCC00", flex: 1, padding: 18, width: 400, }}></View>
          <View style={styles.containerImg}>
            <Image
              style={styles.img}
              source={require('../../assets/iconos/autor.png')}></Image>
          </View>
          <SafeAreaView>
            <TextInput
              placeholder="Nombres"
              style={styles.input}
              label="first_name"
              autoCapitalize="none"
              autoCompleteType=""
              textContentType=""
              keyboardType=""


            />
            <TextInput
              placeholder="Apellido Paterno"
              style={styles.input}
              label="Last_name"
              autoCapitalize="none"
              autoCompleteType=""
              textContentType=""
              keyboardType=""


            />
            <TextInput
              placeholder="Apellido Materno"
              style={styles.input}
              label="Apellido_paterno"
              autoCapitalize="none"
              autoCompleteType=""
              textContentType=""
              keyboardType=""


            />
            <TextInput
              placeholder="Matricula"
              style={styles.input}
              label="Matricula"
              autoCapitalize="none"
              autoCompleteType=""
              textContentType=""
              keyboardType=""

            />
            <TextInput
              placeholder="Asesor Interno"
              style={styles.input}
              label="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"

            />
            <TextInput
              placeholder="Asesor Externo"
              style={styles.input}
              label="Password"
              returnKeyType="done"
              secureTextEntry

            />

            
            

            <TouchableOpacity Styles={styles.containerR} >
              <LinearGradient
                // Button Linear Gradient
                colors={['#FFCC00', '#685B96', '#7A4780']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonR}>
                <Text style={styles.textR}>REGISTRARSE</Text>
              </LinearGradient>
            </TouchableOpacity>

          
          </SafeAreaView>
        </View>
      </ScrollView>






    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingStart: 30,
    padding: 10,
    width: 350,
    height: 50,
    padding: 10,
    marginTop: 5,
  },

  Button: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 400,
    height: 150,
    borderWidth: 1,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 45,
    marginBottom: 50,
    marginTop: 10,
    alignContent: 'center',
  },

  containerR: {
    flex: 1,
    alignItems: 'center',
    width: 200,
    marginTop: 100,
  },
  buttonR: {
    margin: 100,
    borderWidth: 1,
    borderColor: '#fff',
    width: '47%',
    height: 50,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
  textR: {
    fontSize: 15,
    color: '#fff',
  },

  containerIN: {
    flex: 1,
    alignItems: 'center',
    width: 100,
  },
  buttonIN: {
    margin: 100,
    borderWidth: 1,
    borderColor: '#fff',
    width: '47%',
    height: 50,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  textIN: {
    fontSize: 15,
    color: '#fff',
  },
});



export default AddAutor;
