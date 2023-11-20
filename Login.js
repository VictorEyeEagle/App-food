import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cabeçalho}>Bem vindo!</Text>
      <StatusBar style="auto" />
      <TextInput placeholder='Email' textContentType="emailAddress" style={styles.inputtext} />
      <TextInput placeholder='Senha' textContentType="password" style={styles.inputtext} />
      <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate("Lista")}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regButton} onPress={() => navigation.navigate("Registrar")} >
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cabeçalho: {
    fontSize: 40,
    marginBottom: 450,
    color: "black",
    top: 30
  },

  cabeçalho2: {
    fontSize: 40,
    marginBottom: 400,
    color: "black",
    top: 30,
    paddingTop: 120
  },

  cabeçalho3: {
    fontSize: 30,
    marginBottom: 400,
    color: "black",
    bottom: 155,
    paddingTop: 120
  },

  inputtext: {
    height: 60,
    width: 250,
    bottom: 310,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 35,
    textAlign: 'center'
  },

  logButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    bottom: 300,
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60
  },

  regButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    bottom: 290,
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60
  },

  buttonText: {
    color: 'white',
  },
});
