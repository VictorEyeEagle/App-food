import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import { DATA_BASE } from './ListaView';

const ProductDetail = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(`Selecionado = ${id}`);
  const product = DATA_BASE.find((item) => item.id === id);

  return (
    <View style={{ backgroundColor: "black", paddingBottom: 175 }}>
      <View style={{ borderRadius: 0 }}>
        <Card containerStyle={{backgroundColor: "#d1d1cf", borderRadius: 40}}>
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
          <TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}><Text style={styles.text}>Pedir</Text></TouchableHighlight>
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
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});