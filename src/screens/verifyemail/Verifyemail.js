import React, { useState } from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Arrowback from '../../components/Arrowback';
const VerifyEmail = ({navigation}) =>{
    const [show,setShow]=useState(false);
    return( 
        <View >  
        <Arrowback onPress={()=>navigation.navigate('Login')} style={styles.backbtn}/>
           <Text style={styles.txt}>Let’s verify your email</Text>
           <View>
            <Text style={styles.txt2}>Please check our inbox and tap the link in 
the email we’ve just sent to:</Text>
           </View>
           {
            show?
            <Modal
            transparent={true}
            visible={show}
            animationType='slide'
            >
                <View style={styles.modalView}>
                    <Image source={require('../../assets/verify.png')} style={styles.modalimg}/>
                  <Text style={styles.modaltxt}>Email Adress Verify Successfully!</Text>
                  
                  <TouchableOpacity style={styles.modalbtn} onPress={()=>navigation.navigate('Information')}>
                      <Text style={styles.modalbtntxt}>ok</Text>
                  </TouchableOpacity>
                </View>
                
            </Modal>:null
           }
      
           
            <TouchableOpacity onPress={()=>setShow(true)}>
                <Text style={styles.txt3}>Resend it</Text>
            </TouchableOpacity>
        
           
        </View>
    )
}
export default VerifyEmail;
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
        marginTop:9,
        left:10
    },
    txt3:{
        color:"#35A6AE",
        fontSize:18,
        top:"10%",
        left:"70%"
    },
    modalView:{
        width:'90%',
        backgroundColor:'#FFFFFF',
        alignItems:"center",
        justifyContent:'center',
        gap:30,
        borderRadius:18,
        left:'4%',
        top:'25%'
    },
    modaltxt:{
        color:"black",
        fontSize:16
    },
    modalbtntxt:{
        color:'#FFFFFF',
        fontSize:24,
        textAlign:'center',
        marginTop:'1%'
    },
    modalbtn:{
        width:'65%',
        backgroundColor:'#35A6AE',
        borderRadius:10,
        height:"17%",
        bottom:'1%'
    },
    modalimg:{
        marginTop:'5%'
    },
    backbtn:{
        marginTop:"5%"
    }
})