import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function AddFile() {
  const [ListaDeTiposPublicacion,setListaDeTiposPublicacion]=useState([])
  const getListaDeTiposDePublicacion = async () => {
    const url = `https://7f2f-2806-2f0-7121-fa35-a0d6-4191-3df7-c5c0.ngrok.io/api/gestion/lista/tiposdepublicacion/`;
    const request = await fetch(url, {
      method: 'GET',
      headers: {
        ContentType: 'application/json',
      },
    });
    const response = await request.json();
    setListaDeTiposPublicacion(response);
    setLoading({
      list_autor: false,
      list_tiposdepublicacion: true,
    });
  };
  useEffect(() => {
    getListaDeTiposDePublicacion();
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={ListaDeTiposPublicacion.map((item)=>{
          return({
            label:item.nombre,value:item.id
          });
        })}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
