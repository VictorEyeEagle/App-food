import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from "./styles"

export default function Registro_Tela({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.cabeçalho2}>Sessão de registro</Text>
            <TextInput style={styles.inputtext} placeholder='Nome de Usuario' textContentType="name" />
            <TextInput style={styles.inputtext} placeholder='Senha' textContentType="password" />
            <TextInput style={styles.inputtext} placeholder='Email' textContentType="emailAddress" />
            <TextInput style={styles.inputtext} placeholder='Numero de telefone' textContentType="telephoneNumber" keyboardType="numeric" />
            <TouchableOpacity style={styles.regButton} onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>

    )
}