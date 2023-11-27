import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from "./styles"

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cabeçalho}>Bem vindo!</Text>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/403/403644.png" }} style={styles.imageLo} resizeMode="center" />
      <StatusBar style="auto" />
      <TextInput placeholder='Email' textContentType="emailAddress" style={styles.inputtext} />
      <TextInput placeholder='Senha' textContentType="password" style={styles.inputtext} />
      <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate("Lista")}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regButton} onPress={() => navigation.navigate("Registrar")} >
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}




