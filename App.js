import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boasVindas}>oi dfhdf</Text>
      <Text style={styles.estilo2}>oi dfhdf0</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boasVindas: {
    color: '#024589',
    backgroundColor: '#dddddd',
    fontSize: 30
  },
  estilo2: {
    color: '#459812',
    backgroundColor: '#aaaaaa',
    fontSize: 60
  },
});
