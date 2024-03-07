import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
const Arrowbtn =(props)=>{
    return(
        <TouchableOpacity  onPress={props.onPress} >
                    <Image source={require('../assets/arrow.png')} />
                </TouchableOpacity>
    )
}
export default Arrowbtn;
