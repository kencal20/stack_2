import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity
          style={style.login_button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={style.login_buttontxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={style.signup_button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={style.signup_buttontxt}>Signin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  login_button: {
    backgroundColor: "purple",
    borderWidth: 1,
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  login_buttontxt: {
    color: "white",
  },
  signup_button: {
    alignItems: "center",
    justifyContent: "center",
  },
  signup_buttontxt: {
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
