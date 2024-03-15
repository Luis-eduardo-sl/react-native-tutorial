import { TouchableHighlight, View, Text, StyleSheet } from "react-native"

const Button = ({title, onPress}) => {
    return (
        <TouchableHighlight style={styles.thButton} onPress={onPress}>
        <View style={styles.customButton}>
          <Text style={styles.textButton}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#fafafa",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 100
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