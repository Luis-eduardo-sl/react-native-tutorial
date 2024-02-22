import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer'
import Body from './components/Body';
// import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      resizeMode="cover" 
      source={require('./assets/images/bg-mobile.jpg')}
      style={styles.bg}>
        <Header />
        <Body />
        <Footer />
      </ImageBackground>
      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    flex:1,
    width: '100%',
    justifyContent: 'center'
  }
});