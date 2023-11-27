import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from "./styles"

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




