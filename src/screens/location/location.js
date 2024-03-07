import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button,TextInput,KeyboardAvoidingView,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native"
const Location =({navigation})=>{
    return(
        <View>
            <Image source={require('../../assets/map.png')} style={styles.img} />
            <Image source={require('../../assets/blur.png')} style={styles.img2}/>
            <Modal 
      transparent={true}
      animationType='slide'
      >
        <View style={styles.modalcontainer} >
            <Image source={require('../../assets/Location.png')} style={styles.img3}/>
          <View >
            <Text style={styles.txt1}>Enable your location</Text>
            <Text style={styles.txt2}>Choose your Location to satrt find the </Text>
            <Text style={styles.txt3}>request around you</Text>
            <View style={styles.box}>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btntxt}>Use my location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btntxt}>Skip for now</Text>
            </TouchableOpacity>
            </View>
           
          </View>
        </View>
        </Modal>
        </View>
    )
}
export default Location;
const styles=StyleSheet.create({
    img:{
      width:'100%'
    },
    img2:{
        width:'100%',
        height:'100%',
        bottom:"55%"
    },
    modalcontainer:{
       width:'90%',
       backgroundColor:'#FFFFFF',
       alignSelf:'center',
       alignItems:'center',
       justifyContent:'center',
       marginTop:170,
       borderRadius:9,
       padding:68
    },
    img3:{
        bottom:'10%'
    },
    txt1:{
        fontSize:24,
        color:'#191718',
        fontWeight:'400',
        textAlign:'center'
    },
    txt2:{
        fontSize:16,
        textAlign:'center',
        top:'8%'
    },
    txt3:{
        fontSize:16,
        textAlign:"center",
    },
    btn:{
        borderWidth: 1,
        borderRadius: 9.8,
        padding:11,
        marginTop:10,
        width:335   
     },
     btntxt:{
        textAlign:'center',
        fontSize:18,
        color:'black',
        fontWeight:'500'

     },
     box:{
         top:50
     }

})