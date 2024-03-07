import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { Image } from "expo-image";
import H1 from "./ui/H1";
import CardUser from "./CardUser";

const users = [
  {
    id: 1,
    name: "Luis",
    email: "luis@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },

  {
    id: 2,
    name: "Maria",
    email: "maria@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },

  {
    id: 3,
    name: "Carlos",
    email: "carlos@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },
  {
    id: 4,
    name: "Fernanda",
    email: "carlos@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },
  {
    id: 5,
    name: "Anderson",
    email: "carlos@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },

  {
    id: 6,
    name: "Anderson",
    email: "carlos@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },

  {
    id: 7,
    name: "Anderson",
    email: "carlos@gdfng.vfio",
    avatar: "https://avatars.githubusercontent.com/u/133153563?v=4",
  },
];

const Body = () => {
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
