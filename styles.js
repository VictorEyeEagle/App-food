import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cabeçalho: {
        fontSize: 40,
        marginBottom: 450,
        color: "black",
        top: 30
    },

    cabeçalho2: {
        fontSize: 40,
        marginBottom: 400,
        color: "black",
        top: 30,
        paddingTop: 120
    },

    cabeçalho3: {
        fontSize: 30,
        marginBottom: 400,
        color: "black",
        bottom: 155,
        paddingTop: 120
    },

    inputtext: {
        height: 60,
        width: 250,
        bottom: 310,
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 35,
        textAlign: 'center'
    },

    logButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        bottom: 300,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60
    },

    regButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        bottom: 290,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60
    },

    buttonText: {
        color: 'white',
    },

    noturno: {
        position: "absolute",
        width: 30,
        height: 30,
        bottom: 660,
        right: 10

    },

    darkmodebuttom: {
        right: -175,
        top: -35
    }

}
);

export default styles