import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';

const Body = () => {
  return (
    <View style={styles.body}>
        <Text style={styles.boasVindas}>Bem vindo </Text>
        
        <View style={styles.card}>
            <Text style={styles.titulo}>Projeto 1 </Text>
            <Text style={styles.txt}>A função do projeto é ..... </Text>
            <Image
            style={styles.Image}
            source="https://picsum.photos/seed/696/3000/2000"
        />
        </View>

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