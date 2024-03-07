import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import Arrowback from '../../components/Arrowback';
const Call =({navigation})=>{
    return(
       <View style={styles.body}>
        <Arrowback
         style={styles.Arrowback}
         onPress={()=>navigation.goBack()}
        />
        <View style={styles.imgcontainer}>
        <Image source={require("../../assets/callinglogo.png")}/>
        </View>
        <View style={styles.container}>
        <Image source={require("../../assets/camera.png")}/>
        <Image source={require("../../assets/microphone.png")}/>
        <Image source={require("../../assets/calllogo.png")}/>
        <Image source={require("../../assets/video.png")}/>
        <Image source={require("../../assets/more.png")}/>
        </View>
        
       </View>
    )
}
export default Call;
const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    imgcontainer:{
        justifyContent:"center",
        alignItems:"center",
        // verticalAlign:"middle"
        marginTop:"55%"
    },
    container:{
        flexDirection:'row',
        justifyContent:"center",
        top:"40%",
        columnGap:20
    },
    Arrowback:{
        marginTop:"5%",
        left:"2%"
    }
})