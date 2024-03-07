import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal,ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
const Information = ({navigation}) =>{
    return( 
        <ScrollView style={styles.body}
 
        >  
          
          <Arrowback onPress={()=>navigation.goBack()} style={styles.back}/>
           <Text style={styles.txt}>Complete Information</Text>
           <View style={styles.box2}>
            <Textinput 
            name={'what language do you speak?'}
            placeholder={'Select type'}
        style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'when you are availble?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Do you have delivery experience before?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'which type of phone do you have?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'do you have internet on your phone?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Do you have vechile?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Are you willing to have your crimnal background checked?'}
            placeholder={'Select type'}
            style={styles.textinput}
            
            />
            <TouchableOpacity style={styles.img3}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.box3}>
            <Textinput 
            name={'Are you legally able to work in pakistan?'}
            placeholder={'Select type'}
            style={styles.textinput}
            />
            <TouchableOpacity style={styles.img2}>
            <Image source={require('../../assets/downarrow.png')} />
            </TouchableOpacity>
            
          </View>
      
           <View style={styles.box}>
            
            <Continuebutton style={styles.btn} onPress={()=>navigation.navigate("Upload")}/>
           </View>
           
        </ScrollView>
    )
}
export default Information;
const styles=StyleSheet.create({
    body:{
        backgroundColor:"#FFFFFF",

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
    box2:{
       marginTop:80,
        left:'2%',

    },
    box3:{
         left:'2%',
      
    },
    btn:{
        height:48,
        width:"90%",
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
        left:10,
        bottom:'1%'
    },
    textinput:{
      width: "94%",
      paddingHorizontal:3,
      borderWidth: 1,
      borderRadius: 9.8,
          top:6,
    },
    back:{
      marginTop:"9%"
    }
    
})