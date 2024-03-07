import React from 'react';
import {View,Text,Image,StyleSheet,} from 'react-native';
const Skipbtn =(props)=>{
    return(
        <View style={[styles.body,props.style]}>
          <Text style={styles.uppertxt}>{props.name1}</Text>
        <Text style={styles.innertxt}>{ props.name2}</Text>
        
        <Image source={require("../assets/line.png")} style={styles.line}/>
        </View>
    )
}
export default Skipbtn;
const styles=StyleSheet.create({
    uppertxt:{
        fontSize:16,
      },
      innertxt:{
        color:"black",
        fontSize:18,
        marginTop:"1%"
      },
      body:{
        marginLeft:"5%",
        marginTop:"2%"
      },
      line:{
        width:"95%",
        marginTop:"2%"
      }
})