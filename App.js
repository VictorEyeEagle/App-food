import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListView from "./ListView";
import DetailView from "./DetailView";
import Login from "./Login";
import Registro from "./Registro";

const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Entrar" component={Login}></Stack.Screen>
                <Stack.Screen name="Registrar" component={Registro}></Stack.Screen>
                <Stack.Screen name="Lista" component={ListView}></Stack.Screen>
                <Stack.Screen name="Detalhes" component={DetailView}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;
