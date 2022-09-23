import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Login from "../pages/login";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTitleAlign: "left",
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Signin"
          component={Signin}
       
        />
        <Stack.Screen
          name="Login"
          component={Login}
       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  rightheader: {
    position: "absolute",
    top: 26,
    right: 20,
  },
  rightheadertxt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
