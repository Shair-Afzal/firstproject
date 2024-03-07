import React, { useState } from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
const Email = ({navigation}) =>{
    return( 
        <View style={styles.body}>  
        <Arrowback onPress={()=>navigation.navigate('Login')} style={styles.backbtn}/>
           <Text style={styles.txt}>Let’s verify your email</Text>
           <View>
            <Text style={styles.txt2}>Your email</Text>
            <TextInput placeholder='verify your email..' style={styles.input}/>
           </View>
           
      
           <View style={styles.box}>
            <Image source={require('../../assets/checkbox.png')} />
            <Continuebutton onPress={()=>navigation.navigate("VerifyEmail")}/>
           </View>
           
        </View>
    )
}
export default Email;
const styles=StyleSheet.create({
    body:{
        backgroundColor:"#FFFFFF",
    flex:1
    },
    img:{
        marginTop:40,
        left:10
    },
    txt:{
        color: '#191718',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'MADE Okine Sans PERSONAL USE',
    marginTop:18,
    left:10
    },
    txt2:{
        color: '#191718',
        fontSize: 16,
        fontWeight: '300',
        fontFamily: 'MADE Okine Sans PERSONAL USE',
        marginTop:15,
        left:10
    },
    input:{
        height:45,
        width:335,
        borderRadius:10,
        borderWidth:1,
       marginTop:7,
       left:10
    },
    btn:{
        height:48,
        width:335,
        borderRadius:10,
        left:10,
        backgroundColor:'#35A6AE',
    },
    btntxt:{
        color:'#FFFFFF',
        textAlign:'center',
        top:10,
        fontSize:16,
        fontWeight:"600"
    },
    box:{
    top:450,
    left:10,
    gap:20   
    },
    backbtn:{
        marginTop:"5%"
    }
})