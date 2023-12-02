import { firestore } from './firebase/firebaseConfig';

const db = firestore();


function fazerPedido() {
    db.collection('pedidos').add({
        userId: auth.currentUser.uid,
        itemId: item.id,
        timestamp: firestore.FieldValue.serverTimestamp(),
        // Adicione quaisquer outros detalhes do pedido que você deseja armazenar
    })
        .then(() => {
            console.log('Pedido adicionado com sucesso');
        })
        .catch((error) => {
            console.error('Erro ao adicionar pedido:', error);
        });
}

function getPedidos() {
    db.collection('pedidos')
        .where('userId', '==', auth.currentUser.uid)
        .orderBy('timestamp', 'desc')
        .get()
        .then((querySnapshot) => {
            const pedidos = querySnapshot.docs.map((doc) => doc.data());
            console.log(pedidos);
        })
        .catch((error) => {
            console.error('Erro ao obter pedidos:', error);
        });
}
