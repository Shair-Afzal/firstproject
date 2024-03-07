import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native"
const Page = ({navigation}) =>{
    return(
        <View>
            <View >
            <Image source={require('../../assets/frame.png')} style={styles.imag}/>
            </View>
            <View>
                <Text style={styles.txt}>Urgent Service B2B Delivery</Text>
                <Text style={styles.txt2}>We work on a crowdsourcing model. 
You place an order, the system selects 
the perfect courier for you.</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Location")}>
                <Text style={styles.btntxt}>Let’s Start</Text>
            </TouchableOpacity>
           
        </View>
    )
}
export default Page;
const styles=StyleSheet.create({
    imag:{
        width:"100%"
    },
    txt:{
        color: '#191718',
        fontSize:24,
        fontFamily:"MADE Okine Sans PERSONAL USE",
        textAlign:"center",
        fontWeight:"700",
        marginTop:30
    },
    txt2:{
        color: '#000000',
        fontSize:18,
        fontFamily:"MADE Okine Sans PERSONAL USE",
        textAlign:"center",
        fontWeight:"300",
        maxWidth:350,
        marginLeft:25,
        marginRight:25,
       marginTop:10 ,    
    },
    btn:{
    
         padding:9,
        backgroundColor:'#35A6AE',
        borderRadius:10,
        marginTop:120,
    marginLeft:30,
    marginRight:30
        
    },
    btntxt:{
        textAlign:"center",
        color:'#FFFFFF',
        marginTop:7,
        fontSize:16,
        
    }


})