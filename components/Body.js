import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';
import H1 from './ui/H1'
import CardUser from './CardUser';

const Body = () => {
  return (
    <View style={styles.body}>
       <H1>Usuários</H1>
       <CardUser 
       avatar= "https://avatars.githubusercontent.com/u/133153563?v=4" 
       name= "Luis"
       email="luis0202.eduardo@gmail.com"
       />

       <CardUser 
       avatar= "https://avatars.githubusercontent.com/u/133153563?v=4" 
       name= "Maria"
       email="maria.eduardo@gmail.com"
       />

       <CardUser 
       avatar= "https://avatars.githubusercontent.com/u/133153563?v=4" 
       name= "Carlos"
       email="carlos.eduardo@gmail.com"
       />
  </View> 
   )
} 

const styles = StyleSheet.create({
    body: {
        flex:3,
        color: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#525252',
        fontSize:  90,
      },
      Image:{
        marginHorizontal: 17,
        marginBottom: 10 ,
        flex: 1,
        width: "90%",
        height: "60%",
        borderRadius: 7, 
      },  
      boasVindas:{
        fontSize: 25,
        color: "white",
      },
      card:{
        marginTop: 40,
        backgroundColor: "#9AA0A6",        
        width: 370,
        height: 300,
        borderRadius: 7, 
      },
      titulo:{
        marginTop: 15,
        marginLeft: 10,
        fontSize: 20,
        color: "white",
      },
      txt:{
        marginTop: 15,
        marginLeft: 20,
        fontSize: 15,
        color: "white",
      }
    
})


export default Body