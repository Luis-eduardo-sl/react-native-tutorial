import {ScrollView, StyleSheet, Text, View, FlatList, } from "react-native";
import { useEffect, useState } from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import Button from "./ui/Button";
import { useNavigation } from "@react-navigation/native";

const Body = () => {

  const [users, setUsers] = useState([]);
  const navigation = useNavigation()

  const getUsers = async () => {
    try {
      const result = await fetch(
        "https://backend-api-express-ag0n.onrender.com/user"
      );
      const data = await result.json();
      console.log(data.sucess);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.titleAdd}>
        <H1 style={styles.usuario}>User</H1>
        <Button title="Add User"
        onPress={()=> navigation.navigate('Cadastrar', {users, setUsers})}
        />

      </View>
     
        {/* <Button
        onPress={() => getUsers()} 
        title = 'Recarregar'>
        </Button> */}

        <View style={styles.listUser}>
       
          {users.length ? (
            <FlatList
              data={users}
              renderItem={({ item }) => <CardUser user={item} />}
              keyExtractor={(user) => user.id}
            />
          ) : (
            <Text style={{ color: "#FFF", fontSize: 20 }}>Loading...</Text>
          )}
        </View>


 
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,
    width: "100%",
  },
  
  listUser: {
    width: "100%",
    alignItems: "center"
  },
  usuario:{
    padding: 1
  },
  titleAdd:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20

  }
  
});

export default Body;
