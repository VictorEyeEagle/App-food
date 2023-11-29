import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';

export default function Barralateral() {
    return (
        <View>
            <StatusBar style="auto" />
            <Text>Nome de usuário</Text>
            <Text>Status: ?</Text>
            <TouchableOpacity><Text>Conferir pedidos</Text></TouchableOpacity>
        </View>
    )
};
