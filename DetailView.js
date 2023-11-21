import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button } from '@rneui/base';
import { DATA_BASE } from './ListView'; 

const ProductDetail = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(`Selecionado = ${id}`);
  const product = DATA_BASE.find((item) => item.id === id); 

  return (
    <View>
      <Card>
        <Text>id = {id}</Text>
        <Image source={{ uri: product.imagem }} style={{ width: 300, height: 200 }} />
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.nome}</Text>
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text>{product.descricao}</Text>
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ fontWeight: 'bold' }}>R$ {product.valor}</Text>
        </View>
        <Button title="Pedir" onPress={() => navigation.goBack()} />
      </Card>
    </View>
  );
};

export default ProductDetail;
