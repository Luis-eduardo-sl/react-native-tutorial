import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';


const Header = () => {
    return(
      <View style={styles.header}>
          <View style={styles.avatar}>
          <Image style={styles.avatarImg}
           source= 'https://avatars.githubusercontent.com/u/133153563?v=4' />
          </View>
          <Text style={styles.boasVindas}>Luis Eduardo</Text>
      </View>
      )
}

const styles = StyleSheet.create({
    boasVindas:{
        fontSize: 25,
        color: "white",
      },    
    header: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
      },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10 ,
      },
      avatarImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
      },
})


export default Header