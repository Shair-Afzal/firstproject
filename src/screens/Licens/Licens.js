import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
const    Licens = ({navigation}) =>{
    return( 
        <View style={styles.body} >    
          <Arrowback onPress={()=>navigation.goBack()} style={styles.img2}/>
           <Text style={styles.txt}>Driving License</Text>
           <Text style={styles.txt2}>Please upload 
your Driving License Information</Text>
           <View style={styles.box}>
            <TouchableOpacity>
            <Image source={require("../../assets/upload.png")}/>
            </TouchableOpacity>
           <View>
           <Textinput 
           placeholder={"type no.."}
            name={"Identification Card No"}/>
            <View style={styles.flex}>
                <View >
                <Textinput
            placeholder={"Expiry Date"}
            style={styles.input}
            />
            <TouchableOpacity style={styles.arrowbtn}>
            <Image source={require('../../assets/downarrow.png')} style={styles.img}/>
            </TouchableOpacity>
            
             
                </View>
           <View>
           <Textinput
            placeholder={"Date of issue"}
            style={styles.input2}
            />
            <TouchableOpacity style={styles.arrowbtn}>
            <Image source={require('../../assets/downarrow.png')} style={styles.img}/>
            </TouchableOpacity>
            

           </View>
            
            
            </View>
           
           </View>
           <Continuebutton style={styles.btn} onPress={()=>navigation.goBack()}/>
          
</View>
        </View>
    )}
    export default Licens;
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
            width:"160%"
           },
           input2:{
             width:"148%"
           },
           img:{
            left:"110%",
            // bottom:"390%"
           },
           arrowbtn:{
            bottom:"112%"
           },
           box:{
            left:"5%",
            marginTop:"11%",
            gap:80
           },
           btn:{
            marginTop:"15%"
           },
           flex:{
            flexDirection:"row",
            columnGap:75
           }

    })