import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from "react-native";

export default function Barralateral({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1886/1886722.png" }} style={styles.avatar} />
            <Text style={styles.nome}>Olá, Nome usuario</Text>
            <TouchableOpacity style={styles.opcoes}><Text style={styles.opcoestext2}>Conferir pedidos</Text><Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/5251/5251364.png" }} style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity style={styles.opcoes}><Text style={styles.opcoestext2}>Histórico</Text><Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7420/7420790.png" }} style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity style={styles.opcoes}><Text style={styles.opcoestext2}>Pagamentos</Text><Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/619/619914.png" }} style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity style={styles.opcoes}><Text style={styles.opcoestext2}>Configurações</Text><Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8728/8728040.png" }} style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate("Login")}><Text style={styles.opcoestext}>Sair</Text></TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1818',
        justifyContent: 'center'
    },

    opcoes: {
        marginBottom: 20,
        borderRadius: 50,
        padding: 10,
        top: 10

    },

    opcoestext: {
        fontSize: 20,
        color: "white",

    },

    opcoestext2: {
        fontSize: 20,
        color: "white",
        left: 50

    },

    avatar: {
        width: 100,
        height: 100,
        bottom: 100,
        alignSelf: "center"
    },

    logout: {
        borderRadius: 50,
        top: 150,
        backgroundColor: "#7d0707",
        padding: 10,
        alignSelf: "center"
    },

    icon: {
        position: "absolute",
        width: 30,
        height: 30,
        left: 20,
        top: 10

    },

    nome: {
        alignSelf: "center",
        color: "white",
        fontSize: 20,
        bottom: 80

    },

}
)