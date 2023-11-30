import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Barralateral from "./barralater";
import ListView from "./ListView";
import DetailView from "./DetailView";
import Login from "./Login";
import Registro from "./Registro";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registro" component={Registro} />
                <Stack.Screen name="ComDrawer" component={ComDrawer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function ComDrawer({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={(props) => <Barralateral {...props} navigation={navigation} />}>
            <Drawer.Screen name="Opções" component={ListaStack} options={{ headerTintColor: "#2e2e2e" }} />
            <Drawer.Screen name="Detalhes" component={DetailView} />
        </Drawer.Navigator>
    );
}



function ListaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista" component={ListView} options={{ headerShown: false }} />
            <Stack.Screen name="Detalhes" component={DetailView} />
        </Stack.Navigator>
    );
}

export default App;
