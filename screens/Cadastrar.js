import {View, Text, StyleSheet, Button, TextInput,ScrollView} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react';


const Cadastrar = () =>{

    const navigation = useNavigation()
    const {users, setUsers}= useRoute().params

    const [txtName, setTxtName]= useState('')
    const [txtEmail, setTxtEmail]= useState('')
    const [txtAvatar, setTxtAvatar]= useState('')

    const postUser = async (user) =>{
        console.log({name: txtName, email: txtEmail,avatar: txtAvatar})
        try {
          const result = await fetch(
            "https://backend-api-express-ag0n.onrender.com/user",{
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail,avatar: txtAvatar})}
          );
          const data = await result.json();
          console.log(data);
          setUsers([data.user, ...users])
          navigation.goBack()
        } catch (error) {
          console.log(error);
        }
      }
    

    return(
        <ScrollView>
            <View style={styles.form}>
            <TextInput 
            style={styles.input}
            onChangeText={setTxtName}
            value={txtName}
            placeholder="Nome..."
            />

            <TextInput 
            style={styles.input}
            onChangeText={setTxtEmail}
            value={txtEmail}
            placeholder="Email..."
            />
            <TextInput 
            style={styles.input}
            onChangeText={setTxtAvatar}
            value={txtAvatar}
            placeholder="Avatar..."
            />

            <Button title= "Cadastrar" 
            onPress={(postUser)}/>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        display: 'flex',
        padding:40
    },
    input:{
        height: 40,
        width: "100%",
        backgroundColor: '#fff',
        borderWidth: 1,
        marginBottom: 18,
        padding:10
      }
})

export default Cadastrar