import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { URL_BASE } from "../config/URL_BASE";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function CambioDeContrasena({ navigation, route }) {
  const code = route.params.code;
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const handleClickChange = async () => {
    const url = `${URL_BASE}/auth/password/reset/verified/`;
    console.log(url);
    if (password1.trim() !== "" && password2.trim() !== "") {
      if (password1 === password1) {
        
        const data = {
          code: code,
          password: password1,
        };
        const request = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await request.json();
        console.log(response);
        response.success &&
          (alert("se cambio la contraseña con exito"),
          navigation.navigate("Login"));
        response.password && alert(response.password);
        response.detail && alert(response.detail);
      } else {
        alert("las contraseñas no coinciden");
      }
    } else {
      alert("ingrese una contraseña");
    }
  };
  return (
    <>
      <ScrollView>
        <View
          style={{ backgroundColor: "#FFCC00", flex: 1, padding: 18 }}
        ></View>
        <View style={styles.contenedorP}>
          <View style={styles.containerIm}>
            <Image
              style={styles.img}
              source={require("../../assets/ITSZ/LargoB.jpg")}
            ></Image>
          </View>

          <View style={styles.contenedorP}>
            <Text style={styles.titulo}>RESTABLEZCA SU NUEVA CONTARSEÑA.</Text>

            <View style={styles.datos}>
              <TextInput
                style={styles.input}
                value={password1}
                placeholder="ingrese su nueva contraseña"
                onChangeText={(text) => setPassword1(text)}
              ></TextInput>
              <TextInput
                value={password2}
                style={styles.input1}
                placeholder="confrime su contraseña"
                onChangeText={(text) => setPassword2(text)}
              ></TextInput>
              <View>
                <TouchableOpacity
                  Styles={styles.container1}
                  onPress={handleClickChange}
                >
                  <LinearGradient
                    colors={["#FFCC00", "#685B96", "#7A4780"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                  >
                    <Text style={styles.textL}>GUARDAR</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    width: 100,
  },
  button: {
    margin: 100,
    borderWidth: 1,
    borderColor: "#fff",
    width: "40%",
    height: 45,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  textL: {
    fontSize: 15,
    color: "#fff",
  },

  datos: {
    marginRight: 80,
    borderWidth: 1,
    width: "85%",
    borderRadius: 15,
    padding: 10,
    paddingStart: 0,
    marginLeft: 15,
    marginRight: 15,
    height: 280,
    right: 20,
    left: 15,
  },
  contenedorP: {},
  input: {
    height: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingStart: 50,
    padding: 1,
    width: 270,
    height: 50,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  input1: {
    height: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingStart: 50,
    padding: 1,
    width: 270,
    height: 50,
    padding: 10,
    alignItems: "center",
    marginBottom: 1,
    marginTop: 0,
  },
  containerIm: {
    marginHorizontal: 50,
    length: 20,
    right: 80,
  },
  titulo: {
    color: "#000",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 40,
  },
  img: {
    width: 280,
    height: 280,
    borderWidth: 1,
    resizeMode: "contain",
    marginLeft: 70,
    marginRight: 90,
    alignContent: "center",
  },
  contenedorP: {
    backgroundColor: "#fff",
  },
});
