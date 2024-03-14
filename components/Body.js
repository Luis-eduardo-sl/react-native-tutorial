import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState} from "react";
import H1 from "./ui/H1";
import CardUser from "./CardUser";
import CardProduct from "./CardProduct";


const Body = () => {

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])

  

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

  const getProducts = async () => {
    try{
      const result= await fetch ('https://backend-api-express-ag0n.onrender.com/product')
      const data= await result.json()
      console.log(data)
      setProducts(data.product)
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers()
    getProducts()
  }, [])

  return (
    <View style= {styles.largura}>
    <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.body}>
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

      <H1 style={styles.usuario}>Produtos</H1>
      <View style={styles.listProducts}>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardProduct product={item} />}
          keyExtractor={(product) => product.id}
        />
      </View>
      
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    height: 500,
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
  listProducts:{
    height: 350,
  },
  largura:{
    flex: 5,

  }
});

export default Body;
