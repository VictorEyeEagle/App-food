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
      <TextInput placeholder='Senha' textContentType="password" secureTextEntry style={styles.inputtext} />
      <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate("Lista")}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regButton} onPress={() => navigation.navigate("Registrar")} >
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/733/733609.png" }} resizeMode="center" style={styles.imagem} />
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/21/21155.png" }} resizeMode="center" style={styles.imagem2} />
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/299/299409.png" }} resizeMode="center" style={styles.imagem3} />
    </View>
  );
}




