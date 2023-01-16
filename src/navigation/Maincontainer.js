import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import RegisterScreen from "../screens/RegisterScreen";
import BookDetail from "../screens/BookDetail";
import InsideContainer from "./InsideContainer";
import RecuperarContrasena from "../screens/Recuperarcontrasena";
import CambioDeContrasena from "../screens/CambioDeContrasena";
import VerificarCodigo from "../screens/VerficarCodigo"
import RegisterVerify from "../screens/RegisterVerify";
import AddFile from "../screens/AddFile";
import AddAutor from "../screens/AddAutor"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Inside"
            component={InsideContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterVerify"
            component={RegisterVerify}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={BookDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recuperarcontrasena"
            component={RecuperarContrasena}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cambiodecontrasena"
            component={CambioDeContrasena}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verificarcodigo"
            component={VerificarCodigo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddFile"
            component={AddFile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddAutor"
            component={AddAutor}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
