import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';


const Footer = () => {
    return(
      <View style={styles.footer}>
          <Text style={styles.boasVindas}>©Copyryght 2024</Text>
          <Image style={styles.githubIcon}
          source='../assets/images/github-logo.png' />
      </View>
    )
}

const styles = StyleSheet.create({
    boasVindas:{
        fontSize: 25,
        color: "white",
      },
    footer: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#E4E5E7',
        fontSize: 30,
      },
      githubIcon:{
        width: 50,
        height: 50,
      }
})


export default Footer