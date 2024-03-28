//import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Editar from './screens/Editar'
import ListUser from './screens/ListUser';
import Cadastrar from './screens/Cadastrar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    {/* //   <Stack.Navigator>
    //     <Stack.Screen name="Principal" component={ListUser} />
    //     <Stack.Screen name="Cadastrar" component={Cadastrar} />
    //     <Stack.Screen name="Editar" component={Editar} />
    //   </Stack.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen name="Principal" component={ListUser} />
        <Tab.Screen name="Cadastrar" component={Cadastrar} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
