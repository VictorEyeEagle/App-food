import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet, RefreshControl } from 'react-native';
import { ListItem, Image } from '@rneui/base';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

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
    const [comidas, setComidas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchComidas = async () => {
        const collectionRef = collection(db, 'comidas');
        const querySnapshot = await getDocs(collectionRef);
        const comidas = querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
        setComidas(comidas);
        setRefreshing(false);
    };

    useEffect(() => {
        fetchComidas();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchComidas();
    };

    const dadosFiltrados = comidas.filter(item =>
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
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    } />
                <Text style={{ color: "#21212b" }}>Total de produtos: {dadosFiltrados.length}</Text>
            </View>
        </View>
    );
}

export default ListView;

const styles = StyleSheet.create({
    pesquisar: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        top: 10,
        color: "black",
        borderRadius: 50,
        fontSize: 20,
        width: '95%',
        marginLeft: 8
    },
});
