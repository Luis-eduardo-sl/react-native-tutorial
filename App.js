//import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Editar from './screens/Editar'
import listUser from './screens/ListUser';
import Cadastrar from './screens/Cadastrar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={listUser} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
