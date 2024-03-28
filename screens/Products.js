import {View, Text, StyleSheet} from 'react-native'

const Products = () => {
  return (
    <View style={styles.contanier}>
        <Text>
            Products
        </Text>
        <Button  />
    </View>
  )
}

const styles= StyleSheet.create({
    contanier:{
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Products
