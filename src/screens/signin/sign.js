import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity, 
  Button,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Textinput from '../../components/Textinput';
import Smallbutton from '../../components/Smallbutton';
import { useState } from 'react';



const {height} = Dimensions.get('window');
const SIGN = ({navigation}) => {
  const [show,setShow]=useState(true)
  return (
    <KeyboardAvoidingView  behavior="padding"
    style={{flex:1}}>
       {
            show?
            secureTextEntry=(false):
            null
          }
    <ImageBackground source={require('../../assets/color.png')} style={styles.img}>
      <Image source={require('../../assets/clouds.png')} style={styles.img2}/>
      <Image source={require('../../assets/logo.png')} style={styles.img3} />
    </ImageBackground>
    <View style={styles.form}>
    <Image source={require('../../assets/img.png')} style={styles.img4}/>
      <Text style={styles.txt1}>Welcome,</Text>
      <Text style={styles.txt}>login to satrt with us</Text>
      <Textinput name={'Fullname'} placeholder={'fullname..'}/>
    <Textinput name={'Email'} placeholder={'email..'} />
    <Textinput name={'Password'} placeholder={'password..'} secureTextEntry={true}/>
    <TouchableOpacity  onPress={()=>setShow(!show)}>
      <Image source={require('../../assets/icon.png')} style={styles.eye}/>
      </TouchableOpacity>
    </View>
    <View style={styles.confirm}>
    <Textinput name={'Confirm Password'} placeholder={'password..'} secureTextEntry={true}/>
    <TouchableOpacity  onPress={()=>setShow(!show)}>
      <Image source={require('../../assets/icon.png')} style={styles.eye2}/>
      </TouchableOpacity>
    </View>
    {/* <Smallbutton name={"SIGN IN"} style={styles.signbtn}/> */}
    <TouchableOpacity style={styles.signbtn}>
      <Text style={styles.btntxt}>Sign IN</Text>
    </TouchableOpacity>
    

    <View style={styles.flex}>
      <Text style={styles.signtxt1}>Already have an account? </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.signtxt}>LOG IN</Text>
      </TouchableOpacity>
      
    </View>
    
    </KeyboardAvoidingView>
  

)
}
export default SIGN;
const styles=StyleSheet.create({
  img:{
    padding:70,
    position:'relative'
  },
  img2:{
    bottom:80
  },
  img4:{
    bottom:30
  },
  form:{
    
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    alignSelf:'center',
    width:'90%',
    borderRadius:9,
    bottom:'37%',
  gap:20,
    
  },
  txt:{
    color: '#191718',
    fontSize: 24,
    fontWeight: '500',
    textAlign:"center",
    bottom:75
  },
  txt1:{
    color: '#191718',
    fontSize: 24,
    fontWeight: '500',
    textAlign:"center",
    bottom:50
  
  },
  img3:{
     bottom:260,
     alignSelf:'center'

  },
  confirm:{
     bottom:310,
     left:35
  },
  eye:{
    bottom:113,
    left:130
  },
  eye2:{
  bottom:95,
  left:277
  },
  signbtn:{
    backgroundColor:'#35A6AE',
    padding:4,
    bottom:350,
    borderRadius:10,
    marginLeft:90,
    marginRight:90,
  },
  btntxt:{
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'300',
    fontSize:24
  },
  signtxt1:{
    fontSize:16
  },
  signtxt:{
    color:'#35A6AE',
    fontSize:16
  },
  flex:{
    flexDirection:'row',
    marginLeft:90,
    bottom:340,
    fontSize:26
  },
 

})