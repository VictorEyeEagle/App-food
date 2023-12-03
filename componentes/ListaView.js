import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
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
        <View style={{ padding: 8, marginBottom: -10 }}>
            <TouchableOpacity onPress={itemSelecionado} >
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
}

function ListView({ navigation }) {
    const [pesquisa, setPesquisa] = useState('');
    const dadosFiltrados = DATA_BASE.filter(item =>
        removerAcentos(item.nome.toLowerCase()).includes(removerAcentos(pesquisa.toLowerCase()))
    );

    function removerAcentos(s) {
        return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }


    const renderItem = ({ item }) => {
        return <Item item={item} navigation={navigation} />;
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#21212b" }}>
            <TextInput
                style={styles.pesquisar}
                placeholder='Pesquisar'
                value={pesquisa}
                onChangeText={setPesquisa}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dadosFiltrados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()} />
                <Text style={{ color: "#21212b" }}>Total de produtos: {dadosFiltrados.length}</Text>
            </View>
        </View>
    );
}

export default ListView;

const styles = StyleSheet.create({
    pesquisar: {
        backgroundColor: "white",
        padding: 15,
        marginBottom: 10,
        top: 10,
        color: "black",
        borderRadius: 50,
        fontSize: 20,
    },
});