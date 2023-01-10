import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { URL_BASE } from "../config/URL_BASE";
import BookCard from "../components/BookCard";

export default function Search({ navigation }) {
  const [page, setPage] = useState(1);
  const [consulta, setConsulta] = useState("");
  const [data, setData] = useState({
    cargado: false,
    results: [],
    info: {},
  });
  const onChangeSearch = (query) => setConsulta(query);
  const onPrees = async () => {
    const url = `${URL_BASE}/archivo/?page=${page}&search=${consulta}`;
    const token = await SecureStore.getItemAsync("token");
    if (consulta.trim() === "") {
      alert("ingrese datos de busqueda");
    } else {
      const request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const response = await request.json();
      if (page < response.info.pages) {
        setPage(page + 1);
      }
      setData({
        cargado: true,
        results: [...results,...response.results],
        info: response.info,
      });
    }
  };
  const { cargado, results, info } = data;
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: "#FFCC00", flex: 1, padding: 18 }}>
      
        </View>

        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currenHeight }}>
          <View style={styles.buscador}>
            <Searchbar
              placeholder="Buscar"
              onChangeText={onChangeSearch}
              value={consulta}
              onIconPress={()=>onPrees()}
            />
          </View>
        </SafeAreaView>

        {cargado ? (
          results.length === 0 ? (
            <Text>sin resultados</Text>
          ) : (
            <>
              {results.map((element) => (
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
              <View>
                <TouchableOpacity Styles={styles.container1} onPress={onPrees}>
                  <LinearGradient
                    colors={["#FFCC00", "#FFCC00", "#FFCC00"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                  >
                    <Text style={styles.textL}>ver mas resultados</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
          )
        ) : (
          <Text></Text>
        )}
      </ScrollView>
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
  buscador: {
    padding: 15,
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
});
