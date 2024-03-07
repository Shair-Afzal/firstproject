import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import Textcard from "../../components/Textcard"
import Continuebutton from '../../components/Continuebutton'
import Arrowback from '../../components/Arrowback'

const Details = ({navigation})=>{
    return(
    <View style={styles.maincontainer}>

    <Arrowback
     onPress={()=>navigation.goBack()}
     style={styles.Arrowback}
     />
        <Image
         source={require("../../assets/hero.png")}
         style={styles.img}
         />
         <View>
         <Image 
         source={require("../../assets/herotxt.png")}
         style={styles.imgtxt}
         /> 
         </View>
       
        <Textcard
        name1={"1x Tooth paste"} 
        name2={"$20"}
        style={styles.box1}
        />
        <Textcard 
        name1={"Pick up (Servaid)"}
        name2={"Ichra bazaar lahore"}
        />
        <Textcard 
        name1={"Drop off"}
        name2={"Gulberg 2 65L "}
        />
         <View style={styles.callchatbox}>
            <TouchableOpacity onPress={()=>navigation.navigate("Call")}>
                <Image source={require("../../assets/call.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
                <Image source={require("../../assets/chat.png")}/>
            </TouchableOpacity>
        </View>
        {/* <Continuebutton/>  */}
      
    </View>
    )
}
Details.navigationOptions = {
    tabBarVisible: false, 
  };
export default Details;
const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    img:{
        top:"3%",
     left:"4%",
    width:"92%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    },
    Arrowback:{
        marginTop:"4%",
        left:"2%"
    },
    imgtxt:{
      left:"28%",
      bottom:"50%"
    },
    
    callchatbox:{
        flexDirection:"row",
        columnGap:10,
        top:"7%",
        left:"3%",
    },
    box1:{
        marginTop:"4%"
    }
    
})