import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import H4 from './ui/H4.js'

const CardProduct = ({product}) => {
    return(
        <View style= {styles.card}>
            <View style = {styles.imageBox}>
                <View>
                    <Image 
                    style={styles.image}
                    source = {product.photo}
                    />
                </View>
            </View>

            <View>
                <H4 >{product.name}</H4>
                <Text>R$ {product.price}</Text>
                <Text>Quantidade: {product.quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:0,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 10
    },
    imageBox:{
        paddingHorizontal: 10
    },
    image:{
        width: 100,
        height: 95,
        borderRadius:3
    },
    email:{
        marginTop: 5
    }, 
    nome:{
        fontWeight: "bold"
    }
})

export default CardProduct