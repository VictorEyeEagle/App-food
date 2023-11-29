import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { ListItem, Image } from '@rneui/base';

export const DATA_BASE = [
    {
        id: 1,
        nome: 'Hambúrguer Clássico',
        descricao: 'Pão, carne, alface, queijo, molho especial',
        valor: 12.99,
        imagem: 'https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg',
    },
    {
        id: 2,
        nome: 'Hambúrguer de Frango',
        descricao: 'Pão, Frango, alface, tomate',
        valor: 10.99,
        imagem: 'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F09%2FHAMBURGER_FRANGO-1.png&w=1920&q=75',
    },
    {
        id: 3,
        nome: "Hamburguer Barbecue",
        descricao: "pão de hambúrguer, hamburguer de carne, molho barbecue, cebola caramelizada, queijo prato",
        valor: 10.99,
        imagem: "https://img.cybercook.com.br/receitas/107/hamburguer-com-bacon-queijo-cheddar-e-molho-barbecue.jpeg",
    },
];

function Item({ item, index, navigation }) {
    function itemSelecionado() {
        console.log(`Item Selecionado = ${index}`);
        navigation.navigate('Detalhes', { id: item.id });
    }
    return (
        <View style={{ padding: 8 }}>
            <TouchableOpacity onPress={itemSelecionado} >
                <ListItem containerStyle={{ borderRadius: 100 }}>
                    <Image source={{ uri: item.imagem }} containerStyle={{ width: 100, height: 100, borderRadius: 50 }} />
                    <ListItem.Content style={{ flex: 1 }}>
                        <ListItem.Title style={{ fontWeight: 'bold' }}>{item.nome}</ListItem.Title>
                        <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                        <ListItem.Subtitle style={{ color: 'blue' }}>R$ {item.valor}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        </View>
    );
}

function ListView({ navigation }) {
    const renderItem = ({ item }) => {
        return <Item item={item} navigation={navigation} />;
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#21212b" }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={DATA_BASE}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
                <Text style={{ color: "#21212b" }}>Total de produtos: {DATA_BASE.length}</Text>
            </View>
        </View>
    );
}

export default ListView;
