import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { URL_BASE } from "../config/URL_BASE";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [infoprofile, setInfoprofile] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getLibros = async () => {
    let token = await SecureStore.getItemAsync("token");
    const URL = `${URL_BASE}/archivo/?page=${page}`;
    const solicitud = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const respuesta = await solicitud.json();
    if (page < respuesta.info.pages) {
      setPage(page + 1);
    }
    setLoading(false);
    setData([...data, ...respuesta.results]);
  };
  const getInfo = async () => {
    let token = await SecureStore.getItemAsync("token");
    const URL = `${URL_BASE}/auth/users/me/`;
    const solicitud = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const respuesta = await solicitud.json();
    console.log(JSON.stringify(respuesta.last_name));
    await SecureStore.setItemAsync("nombre", respuesta.first_name);
    await SecureStore.setItemAsync("apellido_paterno", respuesta.last_name);
    await SecureStore.setItemAsync("apellido_materno", respuesta.apellido_materno);
    await SecureStore.setItemAsync("matricula", respuesta.matricula);
  };
  useEffect(() => {
    //use efect para que cuando se carge el componentete se ejecute la funcion posFata
    getLibros();
    getInfo();
  }, []);

  return (
    <>
      <ScrollView>
      <View style={{ backgroundColor: "#FFCC00", flex: 1, padding: 18 }}></View>
        <View style={styles.contenedorP}>
          <View style={styles.containerIm}>
            <Image
              style={styles.img}
              source={require("../../assets/ITSZ/LargoB.jpg")}
            ></Image>
          </View>

          {data.map((element) => (
            <View style={styles.bookCardContainer}>
              <BookCard
                key={element.id}
                id={element.id}
                titulo={element.titulo}
                imagen={element.imagen}
                materia={element.materia}
                navigation={navigation}
              />
            </View>
          ))}

          <TouchableOpacity
            Styles={styles.container1}
            onPress={() => {
              getLibros();
            }}
          >
            <LinearGradient
              colors={["#FFCC00", "#FFCC00", "#FFCC00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.textL}>ver mas libros</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {loading ? <Loading /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  bookCardContainer: {
    width: 200,
    height: 200,
    marginBottom: 30,
    alignContent: "center",
  },
  container1: {
    flex: 1,
    width: 10,
  },
  button: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "90%",
    height: 35,
    borderRadius: 30,
    padding: 5,
    alignItems: "center",
    marginTop: 10,
  },
  textL: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  containerIm: {
    marginHorizontal: 50,
    length: 20,
    right: 80,
  },
  img: {
    width: 300,
    height: 90,
    borderWidth: 1,
    resizeMode: "contain",
    marginLeft: 60,
    marginRight: 90,
    alignContent: "center",
    marginTop:15,
  },
  contenedorP:{
    backgroundColor:'#fff',
    
},
});
