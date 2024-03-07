import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal,ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
const VechileInformation = ({navigation}) =>{
    return( 
        <View style={styles.body}
 
        >  
          
          <Arrowback onPress={()=>navigation.goBack()} style={styles.back}/>
           <Text style={styles.txt}>Vehicle Information</Text>
           <Text style={styles.txt2}>Please enter your vehicle  Information</Text>
           <View style={styles.box2}>
            <Textinput 
            name={'Vehicle Brand'}
            placeholder={'Select type'}
        style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Model'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Year'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'License Plate'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Colour'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <Continuebutton style={styles.btn} onPress={()=>navigation.navigate("Upload")}/>
         
          </View>
    )
}
export default VechileInformation;
const styles=StyleSheet.create({
    body:{
        backgroundColor:"#FFFFFF",
        flex:1

    },
    img2:{
        bottom:'110%',
        left:'87%'
    },
    img3:{
      bottom:'92%',
      left:'87%'
    },
    txt:{
        color: '#191718',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'MADE Okine Sans PERSONAL USE',
    marginTop:25,
    left:10
    },
    txt2:{
        fontSize:16,
        left:"3%",
        maxWidth:"90%",
        color:'black',
        top:'1%',
        fontWeight:"400"
       },
    box2:{
       marginTop:100,
        left:'2%',

    },
    box3:{
        marginTop:"2%",
         left:'2%',
      
    },
    textinput:{
        width: "94%",
        paddingHorizontal:3,
        borderWidth: 1,
        borderRadius: 9.8,
            top:6,
      },
      back:{
        marginTop:"5%"
      },
      btn:{
        marginTop:"20%",
        left:"5%"
      }
})