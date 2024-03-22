import { Pressable, View, Text, StyleSheet } from "react-native"

const Button = ({title, onPress}) => {
    return (
        <Pressable style={styles.thButton} onPress={onPress}>
        <View style={styles.customButton}>
          <Text style={styles.textButton}>{title}</Text>
        </View>
      </Pressable>
    )
}
const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#1177D1",
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 30,
        textAlign: "center"
    },
    thButton:{
        borderRadius:20,
        marginVertical: 10
    },
    textButton:{
        color: '#E4E5E7',
        textAlign: 'center'
    }
})

export default Button