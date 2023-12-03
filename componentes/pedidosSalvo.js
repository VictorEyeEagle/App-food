import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Alert, Text, StyleSheet } from "react-native";
import { ListItem, Image } from '@rneui/base';
import { auth, db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore";

export default function PedidosSalvos() {
  const [pedidos, setPedidos] = useState([]);

  const fetchOrders = async () => {
    const usuarioAtual = auth.currentUser;

    if (usuarioAtual) {
      const pedidosRef = collection(db, 'pedidosSalvos');
      const q = query(pedidosRef, where('usuarioId', '==', usuarioAtual.uid));

      const querySnapshot = await getDocs(q);
      const pedidos = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setPedidos(pedidos);
    }
  };

  const excluirPedido = async (id) => {
    try {
      await deleteDoc(doc(db, 'pedidosSalvos', id));
      console.log('Pedido excluído com sucesso!');
      fetchOrders();
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    }
  };

  const fazerPedido = async (item) => {
    try {
      const usuarioAtual = auth.currentUser;

      if (usuarioAtual) {
        const pedidosRef = collection(db, 'pedidos');

        const novoPedido = {
          usuarioId: usuarioAtual.uid,
          produtoId: item.produtoId,
          imagem: item.imagem,
          nome: item.nome,
          descricao: item.descricao,
          valor: item.valor,
        };

        await addDoc(pedidosRef, novoPedido);

        console.log('Pedido feito com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao fazer pedido:', error);
    }
  };

  const handleLongPress = (item) => {
    Alert.alert(
      "Opções",
      "Escolha uma opção",
      [
        {
          text: "Pedir",
          onPress: () => fazerPedido(item)
        },
        {
          text: "Excluir",
          onPress: () => excluirPedido(item.id),
          style: "destructive"
        },
        {
          text: "Cancelar",
          style: "cancel"
        }
      ]
    );
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const renderItem = ({ item }) => {
    if (item) {
      return (
        <View style={{ padding: 8, marginBottom: -10 }}>
          <TouchableOpacity onLongPress={() => handleLongPress(item)}>
            <ListItem containerStyle={{ borderRadius: 20, backgroundColor: "#d1d1cf" }}>
              <Image source={{ uri: item.imagem }} containerStyle={{ width: 100, height: 100, borderRadius: 50 }} />
              <ListItem.Content style={{ flex: 1 }}>
                <ListItem.Title style={{ fontWeight: 'bold', color: "#753b00" }}>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: 'gray' }}>R$ {item.valor}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#d98079" }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={pedidos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
