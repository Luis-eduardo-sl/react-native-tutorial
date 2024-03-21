import {View, Text, StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Editar = () =>{

    const navigation = useNavigation()

    return(
        <View style={styles.contanier}>
            <Text>Editar</Text>
            <Button title="Editar" onPress={()=> navigation.navigate('Editar')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Editar