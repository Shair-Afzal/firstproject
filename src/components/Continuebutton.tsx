import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native"
const Continuebutton =(props)=>{
    return(
        <TouchableOpacity style={[styles.btn,props.style]} onPress={props.onPress}>
                <Text style={styles.btntxt}>Continue</Text>
            </TouchableOpacity>
    )
}
export default Continuebutton;
const styles=StyleSheet.create({
    btn:{
        height:48,
        width:"90%",
        borderRadius:10,
        left:3,
        backgroundColor:'#35A6AE',
        bottom:'2%'
    },
    btntxt:{
        color:'#FFFFFF',
        textAlign:'center',
        top:10,
        fontSize:16,
        fontWeight:"600"
    },
})