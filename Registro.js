import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from "./styles"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function Registro_Tela({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleRegistro = async () => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            console.log('Novo usuário criado:', user);
            navigation.goBack(); // ou qualquer outra ação após o registro
        } catch (error) {
            console.error('Erro ao registrar:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabeçalho2}>Sessão de registro</Text>
            <TextInput
                style={styles.inputtext}
                placeholder='Nome de Usuario'
                textContentType='name'
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
            />
            <TextInput
                style={styles.inputtext}
                placeholder='Email'
                textContentType='emailAddress'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.inputtext}
                placeholder='Senha'
                textContentType='password'
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <TextInput
                style={styles.inputtext}
                placeholder='Numero de telefone'
                textContentType='telephoneNumber'
                keyboardType='numeric'
                value={telefone}
                onChangeText={setTelefone}
            />
            <TouchableOpacity style={styles.regButton} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}