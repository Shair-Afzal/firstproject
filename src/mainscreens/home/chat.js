import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import Textcard from "../../components/Textcard"
import Arrowback from '../../components/Arrowback'
import Textinput from '../../components/Textinput'
const Chat=({navigation})=>{
    return(
       <View style={styles.body}>
        <Arrowback 
         onPress={()=>navigation.goBack()}/>
        <Text style={styles.txt}>Chat</Text>
        <Image source={require("../../assets/line.png")} style={styles.line}/>
        <Image source={require("../../assets/chats.png")} style={styles.img}/>
        <View style={styles.box}>
            <Image source={require("../../assets/add.png")}/>
            <Textinput 
            placeholder={'Type your message'}
            style={styles.Textinput}
            />
            <Image source={require("../../assets/Emoji.png")} style={styles.emoji}/>
            <Image source={require("../../assets/send.png")}/>
        </View>
       </View>
    )
}
export default Chat;
const styles=StyleSheet.create({
      line:{
        width:"100%",
        marginTop:"2%"
      },
      txt:{
        fontSize:24,
        fontWeight:"500",
        color:"black",
        left:'3%',
        
      },
      body:{
        backgroundColor:"#FFFFFF",
        flex:1
      },
      img:{
        top:"5%",
        left:"5%"
      },
      box:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"20%"
      },
      Textinput:{
         width: "200%",
        paddingHorizontal:9,
        borderWidth: 2,
        borderRadius: 10,
            top:"40%",
        borderColor:"#BDBDBD",
        right:"26%" 
      },
      emoji:{
        left:"50%"
      },
      
})