import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native"
const Textinput =(props)=>{
    return(
       <View style={styles.container}>
        <Text style={styles.txt2}>{props.name}</Text>
        <TextInput 
        placeholder={props.placeholder} 
        style={[styles.input,props.style]}
       secureTextEntry={props.secureTextEntry}
       
         />
       </View>
    )
}
export default Textinput;
const styles=StyleSheet.create({
    txt2:{
        color: '#191718',
    fontSize: 14,
    maxWidth:'90%'
    
    },
    input:{
        width: 330,
    paddingHorizontal:11,
    borderWidth: 1,
    borderRadius: 9.8,
        top:5,
    },
    container:{
     bottom:65
    }
})