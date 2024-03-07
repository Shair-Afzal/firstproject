import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
const Skipbtn =(props)=>{
    return(
        <TouchableOpacity style={styles.btn} onPress={props.onPress} >
                    <Image source={require('../assets/btn.png')} />
                </TouchableOpacity>
    )
}
export default Skipbtn;
const styles=StyleSheet.create({
    btn:{
        marginLeft:300,
        marginTop:30
   },
})