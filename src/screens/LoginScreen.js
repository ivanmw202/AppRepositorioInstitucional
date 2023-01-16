import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { URL_BASE } from "../config/URL_BASE";

export default function LoginScreen({ navigation }) {
  const [staff,setStaff]=useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const emptyValidate = () => {
    if (email.trim() === "") {
      alert("el email no puede estar vacio");
    }
    if (password.trim() === "") {
      alert("El campo contraseña no puede estrar vacio");
    }
  };
  const onLoginPressed = async () => {
    emptyValidate();
    const url = `${URL_BASE}/auth/login/`;
    var data = {
      email: email,
      password: password
    };
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respuesta = await response.json();
    console.log(respuesta);
    if (respuesta.email === email && respuesta.token ) {
      await SecureStore.setItemAsync("token", respuesta.token);
      await SecureStore.setItemAsync("email", respuesta.email);
      respuesta.is_staff===true&&setStaff(true)
      navigation.navigate("Inside",{staff:staff});
    } else {
      alert(respuesta.email);
    }
    if (respuesta.detail) {
      alert(detail);
    }
  };

  return (
    <>
      
        <View style={styles.screen}>
          
          <View style={styles.container}>
            
            <View style={styles.containerImg}>
              <Image
                style={styles.img}
                source={require("../../assets/ITSZ/LOGO.png")}
              ></Image>
            </View>

            <Text style={styles.titulo}>BIENVENIDO.</Text>
            <Text styles={styles.subTitle}>
              Al repositorio del Instituto tecnologico Superior de Zongolica.
            </Text>

            <SafeAreaView style={styles.formLogin}>
              <TextInput
                style={styles.input}
                label="Email"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Correo Institucional"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                label="Password"
                returnKeyType="done"
                secureTextEntry
                placeholder="Contraseña"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                Styles={styles.containerL}
                onPress={onLoginPressed}
              >
                <LinearGradient
                  colors={["#FFCC00", "#685B96", "#7A4780"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.buttonL}
                >
                  <Text style={styles.textL}>Ingresar</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                Styles={styles.containerR}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <LinearGradient
                  colors={["#FFCC00", "#685B96", "#7A4780"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.buttonR}
                >
                  <Text style={styles.textL}>Registrar</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                Styles={styles.containerH}
                onPress={() => {
                  navigation.navigate("Recuperarcontrasena");
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  colors={["#FFCC00", "#685B96", "#7A4780"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.buttonh}
                >
                  <Text style={styles.textL}>¿haz olvidado tú contrasena?</Text>
                </LinearGradient>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#000",
    fontSize: 60,
    marginTop: 50,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#fff",
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },
  olvido: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingStart: 30,
    padding: 10,
    width: 350,
    height: 50,
    padding: 10,
    marginTop: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  img: {
    width: 270,
    height: 270,
    borderWidth: 2,
    resizeMode: "contain",
    marginLeft: 20,
    marginRight: 70,
    marginBottom: 50,
    marginTop: 85,
    alignContent: "center",
  },
  containerImg: {
    width: 300,
    height: 300,
    alignContent: "center",
  },
  button: {
    height: 200,
    width: 350,
    borderRadius: 30,
  },
  formLogin: {
    alignContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  },

  containerL: {
    flex: 1,
    alignItems: "center",
    width: 200,
  },
  containerR: {
    flex: 1,
    alignItems: "center",
    width: 200,
  },
  containerH: {},

  buttonL: {
    margin: 100,
    borderWidth: 1,
    borderColor: "#fff",
    width: "47%",
    height: 50,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  buttonR: {
    margin: 100,
    borderWidth: 1,
    borderColor: "#fff",
    width: "47%",
    height: 50,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonh: {
    margin: 100,
    borderWidth: 1,
    borderColor: "#fff",
    width: "47%",
    height: 50,
    borderRadius: 30,
    padding: 1,
    alignItems: "center",
    marginTop: -85,
  },

  textL: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignItems:'center',

  },
});
