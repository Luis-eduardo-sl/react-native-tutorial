import {View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text} from 'react-native'
import { useState } from 'react';
import { useRoute, useNavigation} from '@react-navigation/native';
import Button from '../components/ui/Button';


const Editar = () =>{

    const route = useRoute()
    const navigation= useNavigation()
    const {user} = route.params

  
    const [txtName, setTxtName]= useState(user.name)
    const [txtEmail, setTxtEmail]= useState(user.email)
    const [txtAvatar, setTxtAvatar]= useState(user.avatar)

    const editUser = async () =>{
        console.log({name: txtName, email: txtEmail,avatar: txtAvatar})
        try {
          const result = await fetch(
            "https://backend-api-express-ag0n.onrender.com/user/"+user.id ,{
            method: "PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail,avatar: txtAvatar})}
          );
          const data = await result.json();
          console.log(data)
          if(data?.sucess){
            navigation.goBack()
          } else {
            alert(data.error)
          }        
        } catch (error) {
          console.log(error);
        }
      }

    const removeUser = async () =>{
        console.log({name: txtName, email: txtEmail,avatar: txtAvatar})
        try {
          const result = await fetch(
            "https://backend-api-express-ag0n.onrender.com/user/"+user.id ,{
            method: "DELETE",
            headers:{
              "Content-Type": "application/json"
             },
            });
          const data = await result.json();
          console.log(data)
          if(data?.sucess){
            navigation.goBack()
          } else {
            alert(data.error)
          }        
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

            <Button
            title= "Editar Usuario" 
            onPress={(editUser)}/>


             {/* <Button
            style={styles.buttonRemove}
            title= "Remover Usuário" 
            onPress={(removeUser)}/>  */}

            <TouchableOpacity style={styles.buttonRemove} onPress={removeUser}>
                <Text style={styles.buttonText}>Remover Usuário</Text>
            </TouchableOpacity>


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
      },
      buttonRemove: {
        backgroundColor: "#D70206",
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})

export default Editar