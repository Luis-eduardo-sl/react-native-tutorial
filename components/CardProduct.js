import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import H4 from './ui/H4'

const CardProduct = ({name, price, quantity, foto}) => {
    return(
        <View style= {styles.card}>
            <View style = {style.imageBox}>
                <View>
                    <Image 
                    style={style.image}
                    source = {foto}
                    />
                </View>
            </View>

            <View>
                <H4> {name}</H4>
                <Text> {price}</Text>
                <Text> {quantity}</Text>
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
        width: 70,
        height: 70,
        borderRadius:3
    },
    email:{
        marginTop: 5
    }
})

export default CardProduct