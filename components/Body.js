import {ScrollView, StyleSheet, Text, View, FlatList, TextInput} from "react-native";
import { useEffect, useState } from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import CardProduct from "./CardProduct";
import Button from "./ui/Button";

const Body = () => {
  const [txtName, setTxtName]= useState('')
  const [txtEmail, setTxtEmail]= useState('')
  const [txtAvatar, setTxtAvatar]= useState('')

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);

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

  const getProducts = async () => {
    try {
      const result = await fetch(
        "https://backend-api-express-ag0n.onrender.com/product"
      );
      const data = await result.json();
      console.log(data.sucess);
      setProducts(data.product);
    } catch (error) {
      console.log(error);
    }
  };

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
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  return (
    <View style={styles.largura}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.body}
        
      >
        <TextInput 
          style={styles.input}
          onChangeText={setTxtName}
          value={txtName}
          placeholder="Nome"
        />

        <TextInput 
          style={styles.input}
          onChangeText={setTxtEmail}
          value={txtEmail}
          placeholder="Email"
        />
        <TextInput 
          style={styles.input}
          onChangeText={setTxtAvatar}
          value={txtAvatar}
          placeholder="Avatar"
        />
        <Button
        title = "Cadastrar "
        onPress={(postUser)}
        />

        {/* <Button onPress={() => setCounter(counter + 2)} title = 'Add +2'></Button>
        <Button onPress={() => setCounter(counter + 1)} title = 'Add +1'></Button>
        <Text style={{ color: "#fff" }}>VALOR : {counter}</Text> */}


        <H1 style={styles.usuario}>Usuários</H1>
        <Button onPress={() => getUsers()} title = 'Recarregar'>
        </Button>
        <View style={styles.listUser}>
       
          {users.length ? (
            <FlatList
              data={users}
              renderItem={({ item }) => <CardUser user={item} />}
              keyExtractor={(user) => user.id}
              horizontal={true}
            />
          ) : (
            <Text style={{ color: "#FFF", fontSize: 20 }}>Loading...</Text>
          )}
        </View>

        {/* <H1 style={styles.usuario}>Usuários</H1>
        <Button onPress={() => getUsers()} title = 'Recarregar'>
        </Button>
      <View style={styles.listUserr}>
      {users.length ?
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={(user) => user.id}
        />:
        <Text style={{color: "#FFF", fontSize: 20}}>Loading...</Text> }
      </View> */}

        <H1 style={styles.usuario}>Produtos</H1>
        <Button onPress={() => getProducts()} title = 'Recarregar'>
        </Button>
        <View style={styles.listProducts}>
          {users.length ? (
            <FlatList
              data={products}
              renderItem={({ item }) => <CardProduct product={item} />}
              keyExtractor={(product) => product.id}
              horizontal={true}

            />
          ) : (
            <Text style={{ color: "#FFF", fontSize: 20 }}>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    // height: 500,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
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
  usuario: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
    color: "white",
  },
  listUser: {
    height: 120,
  },
  listUserr: {
    height: 350,
  },
  listProducts: {
    height: 120,
  },
  largura: {
    flex: 5,
  },
  input:{
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    margin:12,
    borderWidth: 1,
    padding:10

  }
});

export default Body;
