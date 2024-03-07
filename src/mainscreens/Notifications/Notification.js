import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native"
const Notification = () => {
  const [show,setShow]=useState(true)
  return (
   <ScrollView style={styles.body}>
    <Text style={styles.txt}>Notifications</Text>
    <Image source={require("../../assets/line.png")} style={styles.line}/>
    <View style={styles.box}>
      <Text style={styles.recenttxt}>Recent</Text>
      <TouchableOpacity onPress={()=>setShow(!show)}>
      <Text style={styles.clearAlltxt}>Clear All</Text>
      </TouchableOpacity>
    </View>
    {
      show?
      <View style={styles.Notifications}>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    </View>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    </View>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    
    </View>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    
    </View>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    
    </View>
    <View style={styles.Notificationcard}>
      <View style={styles.innerbox}>
      <Image source={require("../../assets/storeimg.png")} style={styles.storeimg}/>
    <View style={styles.txtbox}>
     <Image source={require("../../assets/servaid.png")}/>
     <Text style={styles.txt2}>Sent you delivery for Gulberg 11 Lahore</Text>
     <Text style={styles.txt3}>14 hours ago</Text>
     </View>
      </View>
    
    </View>
    </View>:
    null
    }
    
   </ ScrollView>
  )
}

export default Notification;
const styles=StyleSheet.create({
  body:{
    backgroundColor:"#FFFFFF",
    flex:1
  },
  line:{
    width:"100%",
    marginTop:"12%"
  },
  txt:{
    fontSize:24,
    fontWeight:"500",
    color:"black",
    left:'6%',
    top:"5%"
    
  },
  box:{
    flexDirection:"row",
    justifyContent:'space-between',
   marginTop:"8%",
   marginBottom:"2%"
   
     },
     recenttxt:{
       fontSize:16,
       color:"black",
       fontWeight:"600",
       marginLeft:"4%",
     },
     clearAlltxt:{
       fontSize:16,
       color:"#35A6AE",
       fontWeight:"600",
       marginRight:"4%"
     },
     txt2:{
      color:"black",
      fontSize:14
     },
     txt3:{
      color:"black",
      fontSize:12
     },
     txtbox:{
     flexDirection:"column",
     rowGap:6,
     bottom:"2%"
     },
     innerbox:{
      flexDirection:"row",
      gap:10,
     marginLeft:"5%"
     },
     Notificationcard:{
      backgroundColor:"#FFFFFF",
          width:"94%",
          elevation: 5, // Shadow depth
          borderRadius:10,
          justifyContent:"center",
          paddingTop:"6%",
          left:"3%"
     },
     storeimg:{
      bottom:"2%"
     },
     Notifications:{
      rowGap:4
     }
})