import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Login from "../pages/login";
import { Text } from "react-native";

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
          options={{
            headerRight: () => <Text style={style.rightheader}>kenneth</Text>,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerRight: () => <Text style={style.rightheader}>kenneth</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
