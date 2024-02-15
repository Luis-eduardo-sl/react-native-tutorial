import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     <View style={styles.header}>
          <View style={styles.avatar}></View>
          <Text style={styles.boasVindas}>Luis Eduardo</Text>
      </View>


      <View style={styles.body}>
        <Text style={styles.boasVindas}>Bem vindo</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.boasVindas}>©Copyryght 2024</Text>
      </View>


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  boasVindas:{
    color: '#fff',
    fontSize: 25
  },
  header: {
    flex:1,
    width: '100%',
    color: '#564655',
    backgroundColor: '##E4E5E7',
    alignItems: 'center',
    flexDirection: 'row'
  },

  body: {
    flex:3,
    color: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#525252',
    fontSize:  90,
  },

  footer: {
    flex:1,
    color: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0C0E',
    fontSize: 30,
  },
  avatar:{
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
    marginHorizontal: 10 
  },
});