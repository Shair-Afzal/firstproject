import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from "react-native"
const Profile = () => {
  return (
   <View style={styles.body}>
    <View style={styles.box}>
    <Text style={styles.txt}>Profile</Text>
    <TouchableOpacity>
    <Text style={styles.edittxt}>Edit</Text>
    </TouchableOpacity>
    </View>
    <Image source={require("../../assets/line.png")} style={styles.line}/>
    <View style={styles.profileimgbox}>
      <Image source={require("../../assets/profileimg.png")}/>
      <Text style={styles.txt}>Nate Samson</Text>
    </View>
    <View>
      <Text>Information</Text>
      <View style={styles.box2}>
        <Text style={styles.txt2}>Username</Text>
        <Text>Nate Samson</Text>
      </View>
      <Image source={require("../../assets/line.png")} style={styles.line}/>
      </View>
   </View>
   
  )
}

export default Profile;
const styles=StyleSheet.create({
  body:{
    backgroundColor:"#FFFFFF",
    flex:1
  },
 txt:{
    fontSize:24,
    fontWeight:"500",
    color:"black",
  },
  line:{
    width:"100%",
    marginTop:"3%"
  },
  edittxt:{
    fontSize:16,
    color:"#35A6AE",
    fontWeight:"600",
  },
  box:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"10%",
    marginLeft:"3%",
    marginRight:"3%"
  },
  box2:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"3%",
    marginLeft:"3%",
    marginRight:"3%"
  },
  profileimgbox:{
    alignItems:"center",
    marginTop:"8%"
  },
  txt2:{
    fontSize:18,
    color:"black"
  },
  line:{
    marginLeft:"3%",
    width:"94%",
    marginTop:"1%"
  },
  

})