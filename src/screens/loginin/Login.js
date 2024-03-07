import React, { useState } from 'react';
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
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Smallbutton from '../../components/Smallbutton';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [show,setShow]=useState(true)
  return (
        <KeyboardAvoidingView >
          <ImageBackground source={require('../../assets/color.png')} style={styles.img}>
            <Image source={require('../../assets/clouds.png')} style={styles.img2}/>
            <Image source={require('../../assets/logo.png')} style={styles.img3} />
          </ImageBackground>
          {
            show?
            secureTextEntry=(false):
            null
          }
          <View style={styles.form}>
          <Image source={require('../../assets//img.png')} style={styles.img4}/>
            <Text style={styles.txt1}>Welcome,</Text>
            <Text style={styles.txt}>login to satrt with us</Text>
          <Textinput name={'Email'} placeholder={'email..'} />
          <Textinput name={'Password'} placeholder={'password..'} secureTextEntry={show}/>
          <TouchableOpacity onPress={()=>setShow(!show)}>
            <Image source={require('../../assets/icon.png')} style={styles.eye}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Email')}>
            <Text style={styles.forget}>Forgot password?</Text>
          </TouchableOpacity>
          <Smallbutton name={"LOG IN"}/>
          <View style={styles.flex}>
            <Text style={styles.signtxt1}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SIGN')}>
              <Text style={styles.signtxt}>SIGN UP</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.icons}>
            <TouchableOpacity>
            <Image source={require('../../assets/gf.png')}/>
            </TouchableOpacity>
             
            </View>
          </KeyboardAvoidingView>
        

      )
      }
      export default Login;
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
          bottom:280,
        gap:30,
          
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
        forget:{
           color:'skyblue',
           textAlign:'center',
           bottom:375,
           fontSize:16
        },
        eye:{
          bottom:123,
          left:130
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
          bottom:270,
          fontSize:26
        },
        icons:{
           bottom:250,
          left:110
        }
      

      })