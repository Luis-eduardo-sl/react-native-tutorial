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
        backgroundColor: "#fafafa",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 30,
        textAlign: "center"
    },
    thButton:{
        borderRadius:20,
        marginVertical: 10
    },
    textButton:{
        color: '#525252'
    }
})

export default Button