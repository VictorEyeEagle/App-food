import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import styles from "./styles"
import { auth } from './firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export default function TelaInicial({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const autenticacao = auth;
    try {
      const userCredential = await signInWithEmailAndPassword(autenticacao, email, senha);
      const user = userCredential.user;
      console.log("Conta logada");
      Alert.alert(
        'Sucesso!',
        'Voce Logou!',
        [
          { text: 'OK', onPress: () => navigation.navigate("Lista") }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Erro ao registrar:', error.message);
      Alert.alert(
        'Credenciais Invalidas',
        'Tente Novamente',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      );
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.cabeçalho}>Bem vindo!</Text>
      <StatusBar style="auto" />
      <TextInput placeholder='Email' textContentType="emailAddress" style={styles.inputtext} value={email} onChangeText={setEmail} />
      <TextInput placeholder='Senha' textContentType="password" secureTextEntry style={styles.inputtext} value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regButton} onPress={() => navigation.navigate("Registrar")} >
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25347.png" }} resizeMode="center" style={styles.imagem} />
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/21/21155.png" }} resizeMode="center" style={styles.imagem2} />
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/299/299409.png" }} resizeMode="center" style={styles.imagem3} />
    </View>
  );
}




