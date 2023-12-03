import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import Barralateral from "./componentes/barralater";
import ListView from "./componentes/ListaView";
import DetailView from "./componentes/DetalhesView";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import Conferirpedidos from "./componentes/Conferirpedidos";
import pedidosSalvo from "./componentes/pedidosSalvo";
import { AuthProvider } from './AuthProvider';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registro" component={Registro} />
                    <Stack.Screen name="ComDrawer" component={ComDrawer} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}



function ComDrawer({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerLeft: () => null,
                headerRight: () => <DrawerToggleButton />,
                headerTitleAlign: "center"
            }}
            drawerContent={(props) => <Barralateral {...props} navigation={navigation} />}
        >
            <Drawer.Screen name="Opções" component={ListaStack} options={{ headerTintColor: "#2e2e2e", title: "" }} />
        </Drawer.Navigator>
    );
}



function ListaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista" component={ListView} options={{ headerShown: false }} />
            <Stack.Screen name="Detalhes" component={DetailView} />
            <Stack.Screen name="Conferir Pedidos" component={Conferirpedidos} options={{ headerTitleAlign: "center" }} />
            <Stack.Screen name="Salvos" component={pedidosSalvo} options={{ headerTitleAlign: "center" }} />
        </Stack.Navigator>
    );
}

export default App;
