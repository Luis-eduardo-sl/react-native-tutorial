import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer'
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    flex:1,
    width: '100%',
    justifyContent: 'center',
    zIndex: 0
  }
});