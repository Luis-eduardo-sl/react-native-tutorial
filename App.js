//import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Editar from './screens/Editar'
import ListUser from './screens/ListUser';
import Cadastrar from './screens/Cadastrar';
import Products from './screens/Products';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const 


export default function App() {
  return (
    <NavigationContainer>
    {/* //   <Stack.Navigator>
    //     <Stack.Screen name="Principal" component={ListUser} />
    //     <Stack.Screen name="Cadastrar" component={Cadastrar} />
    //     <Stack.Screen name="Editar" component={Editar} />
    //   </Stack.Navigator> */}
 
       <Tab.Navigator>
        <Tab.Screen 
        name="Principal" 
        component={ListUser}
        options={{
          title:  "Cadastrar User"
        }} />
        <Tab.Screen
        name="Products" 
        component={Products}
        options={{
          title:  "Cadastrar User"
        }} />
        <Tab.Screen 
        name="Editar" 
        component={Editar}
        options={{
          headerShown: false
        }}/>
      </Tab.Navigator>
       
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Principal" component={ListUser} />
        <Drawer.Screen name="Cadastrar" component={Cadastrar} />
      </Drawer.Navigator> */}

    </NavigationContainer>
  );
}
