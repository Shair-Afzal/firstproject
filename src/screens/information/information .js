import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import Textinput from '../../components/Textinput';
import Arrowback from '../../components/Arrowback';
import Continuebutton from '../../components/Continuebutton';
const    Upload = ({navigation}) =>{
    return( 
        <View style={styles.body} >    
          <Arrowback onPress={()=>navigation.goBack()} style={styles.img2}/>
           <Text style={styles.txt}>You,re almost done</Text>
           <Text style={styles.txt2}>Please upload these document to complete
your profile</Text>
        <View style={styles.box}>
            <View style={styles.box2}>
            <Image source={require('../../assets/card.png')}/>
            <Text style={styles.btntxt}>Identification Card</Text>
            </View>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Identification")}>
            <Image source={require('../../assets/leftarrow.png')} style={styles.btn}/>
            </TouchableOpacity>
           
        </View>
        <View style={styles.box}>
            <View style={styles.box2}>
            <Image source={require('../../assets/information.png')}/>
            <Text style={styles.btntxt}>Vehicle Information</Text>
            </View>
            
            <TouchableOpacity onPress={()=>navigation.navigate("VechileInformation")} >
            <Image source={require('../../assets/leftarrow.png')} style={styles.btn}/>
            </TouchableOpacity>
           
        </View>
        <View style={styles.box}>
            <View style={styles.box2}>
            <Image source={require('../../assets/licens.png')}/>
            <Text style={styles.btntxt}>Driving License</Text>
            </View>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Licens")}>
            <Image source={require('../../assets/leftarrow.png')} style={styles.btn}/>
            </TouchableOpacity>
           
        </View>
           </View>
 )}

export default Upload;
const styles=StyleSheet.create({
    txt:{
        color: '#191718',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'MADE Okine Sans PERSONAL USE',
    marginTop:"7%",
    left:'3%'
    },
    body:{
        backgroundColor:'#FFFFFF',
        flex:1
    },
    img2:{
        marginTop:"8%",
        left:"1%"

    },
    txt2:{
     fontSize:16,
     left:"3%",
     maxWidth:"90%",
     color:'black',
     top:'1%'
    },
    box:{
        flexDirection:"row",
        top:'10%',
        borderWidth: 1,
    borderRadius: 9.8,
    height:"7.5%",
    width:'90%',
    left:"1%",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"5%"
    },
    box2:{
        flexDirection:"row",
        gap:12,
        left:"3%"
    },
    btn:{
       marginRight:"5%"
    },
    btntxt:{
        fontSize:16,
        color:'black',
        fontWeight:'400'
    }
    
})