import {Text, StyleSheet} from 'react-native'

const H4 = ({title, children}) => {
  return (
    <Text style={styles.h1}>{children}</Text>
    )
}

const styles= StyleSheet.create({
    h4: {
            fontSize: 15,
            fontWeight: 'bold',
            color: "white"
        }
})

export default H4