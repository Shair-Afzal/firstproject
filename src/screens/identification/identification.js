import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const    Identification = ({navigation}) =>{
    return( 
        <View style={styles.body} >    
          <Arrowback onPress={()=>navigation.goBack()} style={styles.img2}/>
           <Text style={styles.txt}>Identification Card</Text>
           <Text style={styles.txt2}>Please upload 
your Identification Card Information</Text>
           <View style={styles.box}>
            <TouchableOpacity>
            <Image source={require("../../assets/upload.png")}/>
            </TouchableOpacity>
           <View>
           <Textinput 
           placeholder={"type no.."}
            name={"Identification Card No"}/>
            <Textinput
            placeholder={"Expiry Date"}
            style={styles.input}
            />
            <Image source={require('../../assets/downarrow.png')} style={styles.img}/>
           </View>
           <Continuebutton style={styles.btn} onPress={()=>navigation.goBack()}/>
          
</View>
        </View>
    )}
    export default Identification;
    const styles=StyleSheet.create({
        body:{
            backgroundColor:'#FFFFFF',
            flex:1
        },
        txt:{
            color: '#191718',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'MADE Okine Sans PERSONAL USE',
        marginTop:"7%",
        left:'3%'
        },
        txt2:{
            fontSize:16,
            left:"3%",
            maxWidth:"90%",
            color:'black',
            top:'1%',
            fontWeight:"400"
           },
           input:{
            width:"35%"
           },
           img:{
            left:"27%",
            bottom:"60%"
           },
           box:{
            left:"5%",
            marginTop:"11%",
            gap:80
           },
           
    })