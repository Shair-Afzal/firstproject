import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import backImage from '../assets/back.png'
const Arrowback =(props)=>{
    return(
       <View > 
        <TouchableOpacity style={props.style} onPress={props.onPress}>
        <Image source={backImage} style={styles.img}/>
        </TouchableOpacity>
           
       </View>
    )
}
export default Arrowback;
const styles=StyleSheet.create({
    img:{
        marginTop:'2%',
        left:10
    },
})