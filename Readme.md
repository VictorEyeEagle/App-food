# Projeto App-Food

## Sobre o Projeto
O projeto App-Food é um aplicativo de comida básico desenvolvido em React Native usando o Expo. O aplicativo oferece uma variedade de funcionalidades que permitem aos usuários navegar por uma lista de comidas, visualizar detalhes de cada item, fazer pedidos e conferir seus pedidos anteriores.

## Funcionalidades
O aplicativo possui as seguintes telas e funcionalidades:

- **Tela de Login:** Permite que os usuários façam login no aplicativo.
- **Tela de Registro:** Permite que novos usuários se registrem no aplicativo.
- **Tela de Lista:** Exibe uma lista de comidas disponíveis para os usuários.
- **Tela de Detalhes:** Mostra detalhes de um item de comida selecionado, incluindo uma imagem, nome, descrição e preço. Os usuários também podem fazer um pedido a partir desta tela.
- **Tela de Conferir Pedidos:** Permite que os usuários vejam seus pedidos anteriores. Os usuários também têm a opção de excluir um pedido.
- **Barra Lateral:** Fornece navegação fácil entre as diferentes telas do aplicativo.

## Tecnologias Utilizadas
O aplicativo foi desenvolvido usando as seguintes tecnologias:

- **React Native:** Uma estrutura de JavaScript para construir aplicativos móveis nativos.
- **Expo:** Uma plataforma de código aberto para fazer aplicativos universais para Android, iOS e web com JavaScript e React.
- **Firebase:** Uma plataforma de desenvolvimento de aplicativos da Google que fornece uma variedade de ferramentas e serviços para desenvolvedores. No projeto foram utilizados os seguintes serviços do Firebase:
  - **Firestore:** Um banco de dados NoSQL em nuvem para armazenar e sincronizar dados em tempo real. Utilizei para armazenar os pedidos do usuário logado e fornece-los respectivamente na tela de 'conferir pedidos'.
  - **Authentication:** Fornece serviços de autenticação de back-end, SDKs fáceis de usar e bibliotecas de IU prontas para autenticar usuários no aplicativo. O usuário se registra usando nome, email, senha e telefone. E para logar é necessario usar o mesmo email e senha.

