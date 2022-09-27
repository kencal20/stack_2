import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <ScrollView style={style.container}>
      <Text style={style.header}>Login</Text>
      <View style={style.fillin}>
        <View style={style.fillin_column1}>
          <Text style={style.label}>Username</Text>
          <TextInput
            style={style.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            Required
          />
          <Text style={style.label}>Password</Text>
          <TextInput
            style={style.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={true}
            Required
          />
        </View>
        <View>
          <TouchableOpacity style={style.login_button}>
            <Text style={style.login_buttontxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={style.signin}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signin");
            }}
          >
            <Text style={style.signintxt}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7d8db",
  },
  header: {
    marginVertical: 30,
    marginHorizontal: 30,
    fontSize: 25,
    fontWeight: 600,
    color: "dodgerblue",
  },

  fillin: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  fillin_column1: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    fontWeight: 300,
    fontSize: 14,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 180,
  },
  login_button: {
    backgroundColor: "purple",
    position: "absolute",
    top: 35,
    borderWidth: 1,
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  login_buttontxt: {
    color: "white",
  },
  signin: {
    position: "absolute",
    top: 170,
    right: 0,
  },
  signintxt: {
    color: "dodgerblue",
  },
});
