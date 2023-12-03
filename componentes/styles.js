import { StyleSheet } from "react-native";

// login e registro

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cabeçalho: {
        fontSize: 40,
        marginBottom: 20,
        marginTop: 30,
        color: "black",
        bottom: 100,
    },

    cabeçalho2: {
        fontSize: 40,
        marginBottom: 20,
        marginTop: 30,
        color: "black",
        paddingTop: 30,
        bottom: 150,
    },

    inputtext: {
        height: 60,
        width: '80%',
        marginBottom: 10,
        borderRadius: 35,
        textAlign: 'center',
        borderWidth: 2
    },
    inputtext2: {
        height: 60,
        width: '80%',
        marginBottom: 10,
        borderRadius: 35,
        textAlign: 'center',
        borderWidth: 2,
        bottom: 80,
    },

    logButton: {
        backgroundColor: '#d60939',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },

    regButton: {
        backgroundColor: 'black',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
        top: 5,
    },

    regButton2: {
        backgroundColor: 'black',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
        bottom: 70,
    },

    buttonText: {
        color: 'white',
        fontWeight: "900",
        fontSize: 15,
        textAlign: 'center'
    },

    imagem: {
        width: 100,
        height: 50,
        marginVertical: 10,
        right: 70,
        top: 140,
    },
    imagem2: {
        width: 100,
        height: 50,
        marginVertical: 10,
        left: 70,
        top: 70,
    },
    imagem3: {
        width: 100,
        height: 50,
        marginVertical: 10
    }
});




export default styles