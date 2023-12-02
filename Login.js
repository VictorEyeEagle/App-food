import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Alert, ActivityIndicator } from 'react-native';
import styles from "./styles"
import { auth } from './firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export default function TelaInicial({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    setLoading(true);
    const autenticacao = auth;
    try {
      const userCredential = await signInWithEmailAndPassword(autenticacao, email, senha);
      const user = userCredential.user;
      console.log("Conta logada");
      navigation.navigate("ComDrawer");
      // Limpe os campos de entrada
      setEmail('');
      setSenha('');
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
    setLoading(false);
  };




  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.cabeçalho}>Bem vindo!</Text>
          <StatusBar style="auto" />
          <TextInput placeholder='Email' textContentType="emailAddress" style={styles.inputtext} value={email} onChangeText={setEmail} />
          <TextInput placeholder='Senha' textContentType="password" secureTextEntry style={styles.inputtext} value={senha} onChangeText={setSenha} />
          <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.regButton} onPress={() => navigation.navigate("Registro")} >
            <Text style={styles.buttonText}>Registre-se</Text>
          </TouchableOpacity>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25347.png" }} resizeMode="center" style={styles.imagem} />
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/21/21155.png" }} resizeMode="center" style={styles.imagem2} />
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/299/299409.png" }} resizeMode="center" style={styles.imagem3} />
        </>
      )}
    </View>
  );

}



