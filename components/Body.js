import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState} from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";


const Body = () => {

  const [users, setUsers] = useState([])

  

  const getUsers = async () => {
    try{
      const result= await fetch('https://backend-api-express-ag0n.onrender.com/user')
      const data= await result.json()
      console.log(data)
      setUsers(data.users)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <View style={styles.body}>
      <H1 style={styles.usuario}>Usuários</H1>
      <View style={styles.listUser}>
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={(user) => user.id}
          horizontal={true}
        />
      </View>
      
      <H1 style={styles.usuario}>Usuários</H1>
      <View style={styles.listUserr}>
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={(user) => user.id}
        />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 3,
    color: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 90,
  },
  Image: {
    marginHorizontal: 17,
    marginBottom: 10,
    flex: 1,
    width: "90%",
    height: "60%",
    borderRadius: 7,
  },
  boasVindas: {
    fontSize: 25,
    color: "white",
  },
  card: {
    marginTop: 40,
    backgroundColor: "#9AA0A6",
    width: 370,
    height: 300,
    borderRadius: 7,
  },
  titulo: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
    color: "white",
  },
  txt: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 15,
    color: "white",
  },
  listUser: {
    height: 120,
  },
  listUserr: {
    height: 350,
  },
});

export default Body;
