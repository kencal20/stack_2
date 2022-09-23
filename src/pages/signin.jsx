import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function Signin({ navigation }) {
  return (
    <ScrollView style={style.container}>
      <Text style={style.header}>Signin</Text>
      <View style={style.fillin}>
        <View style={style.fillin_column1}>
          <Text style={style.label}>First name</Text>
          <TextInput
            style={style.input}
            placeholder="first name"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            Required
          />
          <Text style={style.label}>Last name</Text>
          <TextInput
            style={style.input}
            placeholder="last name"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            Required
          />
          <Text style={style.label}>Password</Text>
          <TextInput
            style={style.input}
            placeholder="password"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={true}
            Required
          />
        </View>
        <View style={style.fillin_column2}>
          <Text style={style.label}>Email</Text>
          <TextInput style={style.input} 
           placeholder="email"
           autoCapitalize="none"
           autoComplete="off"
           autoCorrect={false}
          Required />
          <Text style={style.label}>Username
          </Text>
          <TextInput style={style.input} 
           placeholder="username"
           autoCapitalize="none"
           autoComplete="off"
           autoCorrect={false}
          Required />
          <Text style={style.label}>Confirm password</Text>
          <TextInput
            style={style.input}
            placeholder="password"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={true}
            Required
          />
        </View>
        <View style={style.signup_button}>
          <TouchableOpacity>
            <Text style={style.signup_buttontxt}>Signin</Text>
          </TouchableOpacity>
        </View>
        <View style={style.login}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={style.logintxt}>Login</Text>
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
    marginVertical: 20,
    marginHorizontal: 30,
    fontSize: 25,
    fontWeight: 600,
    color: "dodgerblue",
  },

  fillin: {
    marginHorizontal: 20,
  },
  fillin_column1: {
    flex: 1,
    flexDirection: "column",
  },

  fillin_column2: {
    position: "relative",
    bottom: 200,
    left: 160,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 120,
    
  },
  signup_button: {
    backgroundColor: "purple",
    position: "absolute",
    top: 250,
    borderWidth: 1,
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  signup_buttontxt: {
    color: "white",
  },
  login: {
    position: "absolute",
    top: 255,
    right: 0,
  },
  logintxt: {
    color: "dodgerblue",
  },
});
