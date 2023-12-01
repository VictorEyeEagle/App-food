import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import styles from "./styles"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

export default function Registro_Tela({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegistro = async () => {
        setLoading(true);
        const autenticacao = auth;
        try {
            const userCredential = await createUserWithEmailAndPassword(autenticacao, email, senha);
            const user = userCredential.user;
            console.log("Nova conta criada");
            Alert.alert(
                'Sucesso!',
                'Nova conta criada com sucesso!',
                [
                    { text: 'OK', onPress: () => navigation.goBack() }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.error('Erro ao registrar:', error.message);
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Text style={styles.cabeçalho2}>Sessão de registro</Text>
                    <TextInput
                        style={styles.inputtext2}
                        placeholder='Nome de Usuario'
                        textContentType='name'
                        value={nomeUsuario}
                        onChangeText={setNomeUsuario}
                    />
                    <TextInput
                        style={styles.inputtext2}
                        placeholder='Email'
                        textContentType='emailAddress'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.inputtext2}
                        placeholder='Senha'
                        textContentType='password'
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TextInput
                        style={styles.inputtext2}
                        placeholder='Numero de telefone'
                        textContentType='telephoneNumber'
                        keyboardType='numeric'
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                    <TouchableOpacity style={styles.regButton2} onPress={handleRegistro}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}    