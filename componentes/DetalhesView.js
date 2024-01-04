import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import { auth, db } from '../firebase/firebaseConfig';
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const ProductDetail = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(`Selecionado = ${id}`);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, 'comidas', id);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        setProduct({ id: productDoc.id, ...productDoc.data() });
      } else {
        console.log('documento inexistente');
      }
    };

    fetchProduct();
  }, [id]);

  const adicionarPedido = async () => {
    try {
      const usuarioAtual = auth.currentUser;

      if (usuarioAtual) {
        const pedidosRef = collection(db, 'pedidos');

        const novoPedido = {
          usuarioId: usuarioAtual.uid,
          produtoId: id,
          imagem: product.imagem,
          nome: product.nome,
          descricao: product.descricao,
          valor: product.valor,
        };

        await addDoc(pedidosRef, novoPedido);

        console.log('Pedido adicionado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
    }
  };

  const salvarPedido = async () => {
    try {
      const usuarioAtual = auth.currentUser;

      if (usuarioAtual) {
        const pedidosRef = collection(db, 'pedidosSalvos');

        const novoPedido = {
          usuarioId: usuarioAtual.uid,
          produtoId: id,
          imagem: product.imagem,
          nome: product.nome,
          descricao: product.descricao,
          valor: product.valor,
        };

        await addDoc(pedidosRef, novoPedido);

        console.log('Pedido salvo com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "black", paddingBottom: 175 }}>
      <View style={{ borderRadius: 0 }}>
        <Card containerStyle={{ backgroundColor: "#d1d1cf", borderRadius: 40 }}>
          <Image source={{ uri: product.imagem }} style={{ width: 300, height: 200, borderRadius: 50 }} />
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.nome}</Text>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text>{product.descricao}</Text>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ fontWeight: 'bold' }}>R$ {product.valor}</Text>
          </View>
          <TouchableHighlight style={styles.button} onPress={adicionarPedido}><Text style={styles.text}>Pedir</Text></TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={salvarPedido}><Text style={styles.text}>Salvar para mais tarde</Text></TouchableHighlight>
        </Card>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
