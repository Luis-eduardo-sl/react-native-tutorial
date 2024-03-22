import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Body from '../components/Body';

function ListUser() {
  return (
    <View style={styles.container}>
      <View >
          <Body />
        <StatusBar style="light" />

      </View>
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
    // flex:1,
    width: '100%',
    justifyContent: 'center',
    // zIndex: 0
  }
});

export default ListUser