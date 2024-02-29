import {Text, StyleSheet} from 'react-native'

const H1 = ({title, children}) => {
  return (
    <Text style={styles.h1}>{children}</Text>
    )
}

const styles= StyleSheet.create({
    h1: {
            fontSize: 30,
            fontWeight: 'bold',
            color: "white"
        }
})

export default H1