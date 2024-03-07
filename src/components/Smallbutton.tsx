import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native"
const Smallbutton =(props)=>{
    return(
        <TouchableOpacity style={[styles.loginbtn,props.style]} onPress={props.onPress}>
            <Text style={styles.btntxt}>{props.name}</Text>
          </TouchableOpacity>
    )
}
export default Smallbutton;
const styles=StyleSheet.create({
    loginbtn:{
        backgroundColor:'#35A6AE',
        padding:4,
        bottom:280,
        borderRadius:10,
        marginLeft:90,
        marginRight:90,
      },
        btntxt:{
            color:'#FFFFFF',
            textAlign:'center',
            fontWeight:'500',
            fontSize:18
    },
})