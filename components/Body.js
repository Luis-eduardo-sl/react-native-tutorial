import {ScrollView, StyleSheet, Text, View, FlatList, Platform} from "react-native";
import { useEffect } from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import Button from "./ui/Button";
import { useNavigation } from "@react-navigation/native";
import Header from './Header'
import Footer from './Footer'
import useUserStore from "../stores/userStore";

const Body = () => {
  const navigation = useNavigation()

  const users = useUserStore((state) => state.users)
  const setUsers= useUserStore((state) => state.setUsers)

  console.log('Plataforma Atual: ', Platform.OS);

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
console.log(users);
  return (
    <View style={styles.body}>
      <View style={styles.titleAdd}>
        <H1 style={styles.usuario}>User</H1>
        <Button title="Add User"
        onPress={()=> navigation.navigate('Cadastrar')}
        />

      </View>

        <View style={styles.listUser}>
       
          {users.length ? (
            <FlatList
              data={users}
              renderItem={({ item }) => <CardUser user={item} />}
              ListHeaderComponent={Header}
              ListFooterComponent={Footer}
              keyExtractor={(user) => user.id}
              contentContainerStyle={styles.flatListUser}

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
    flex: 1,
    width: "100%",
  },
  
  listUser: {
    display:'flex',
    width: "100%",
    alignItems: "center",
    maxHeight: Platform.OS === 'web' ? '90vh' : null
  },
  usuario:{
    padding: 1,

  },
  titleAdd:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  flatListUser:{
    // alignSelf: 'center'
  }
  
});

export default Body;
