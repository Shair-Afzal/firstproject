import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import MapView from 'react-native-maps' 
import Textcard from "../../components/Textcard"
import Smallbutton from '../../components/Smallbutton'

const HomeScreen = ({navigation}) => {  
 const [show,setShow]=useState(false)
 const [indicator,setIndicator]=useState(false)
 const [card,setCard]=useState(true)
  return (
   <View  style={styles.container
  }>
    <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 31.5315,
          longitude: 74.3528,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        option
      />
      {/* <Marker
      coordinate={{
        latitude: 31.5315,
        longitude: 74.3528,

      }}
      /> */}
      {
       show?
       <View>
       <View style={styles.offline}>
       <Text style={styles.txt}>Online</Text>
       <Text style={styles.txt}>Online</Text>
       <TouchableOpacity onPress={()=>setShow(false)}>
       <Image source={require("../../assets/online.png")}/>
       </TouchableOpacity>
       </View>
       <View style={styles.gpsonline}>
        <Image source={require("../../assets/gps.png")}/>
      </View> 
      {
        card?
        <View style={styles.card}>
        <View style={styles.store}>
        <View style={styles.storeouterbox}>
          <View style={styles.storebox}>
          <Image source={require("../../assets/storeimg.png")}/>
          <Image source={require("../../assets/servaid.png")}/>
          </View>
          <Image source={require("../../assets/km.png")} style={styles.km}/>
      </View>
      </View>
        <View style={styles.innerbox}>
        <Textcard 
        name1={"Pick up (Servaid)"}
        name2={"Ichra bazaar lahore"}
        />
        <Textcard 
        name1={"Drop off"}
        name2={"Gulberg 2 65L "}
        />
        <View style={styles.smallbtnbox}>
        
         {/* <Smallbutton
        style={styles.Ignorebtn}
        name={'Ignore'}
        /> */}
        <TouchableOpacity 
        style={styles.Ignorebtn} onPress={()=>setCard(false)}>
          <Text style={styles.ignoretxt}>Ignore</Text>
        </TouchableOpacity>
        <Smallbutton
        style={styles.Acceptbtn}
        name={'Accept'}
        onPress={()=>navigation.navigate("Details")}        />
        </View>
        
      </View>
      </View>
      :null
      }
       
      
       </View>
       
       :
       <View>
      <View style={styles.offline}>
      <Text style={styles.txt}>Offline</Text>
      <Text style={styles.txt}>Offline</Text>
      <TouchableOpacity onPress={()=>setShow(true)}>
      <Image source={require("../../assets/offline.png")}/>
      </TouchableOpacity>
      </View>
      <View style={styles.box}>
      <Image source={require("../../assets/moon.png")} style={styles.img}/>
     <Image source={require("../../assets/txt.png")} style={styles.img} />
      </View>
      <View style={styles.gpsoffline}>
        <Image source={require("../../assets/gps.png")}/>
      </View>
      {
      indicator?
       <View style={styles.box2} >
        <TouchableOpacity onPress={()=>setIndicator(false)} style={styles.indicator}>
        <Image source={require("../../assets/indicator.png")} />
        </TouchableOpacity>
        <View style={styles.box3}>
        <Image source={require("../../assets/boy.png")} style={styles.boy}/>
        <Image source={require("../../assets/txt2.png")}/>
        <Image source={require("../../assets/txt3.png")}style={styles.txt3}/>
        </View>
        <View style={styles.distance}>
          <Image source={require("../../assets/distance.png")}/>
        </View> 
    </View>  :
    <View style={styles.box4}>
    <TouchableOpacity onPress={()=>setIndicator(true)} >
    <Image source={require("../../assets/indicator.png")} style={styles.indicator} />
    </TouchableOpacity>
  
  </View>
  }
    </View>
      }
      
      
      
      

   </View>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:"white"
  },
  offline:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:"10%",
    columnGap:60
  },
  txt:{
    color:"black",
    fontSize:16,
    fontWeight:"500"
  },
  box:{
    flexDirection:"row",
    backgroundColor:"#35A6AE",
    top:"5%",
    alignItems:"center",
    paddingTop:"5%"
  },
  img:{
    marginLeft:"5%",
    marginBottom:"3%"
  },
  box2:{
    backgroundColor:"#FFFFFF",
    borderRadius:10,
     height:"50%",
    top:"56%"
    
  },
  box3:{
    flexDirection:"row",
    columnGap:15,
    marginTop:"10%",
    // justifyContent:"center",
    // alignItems:"center"
  },
  txt3:{
    left:"150%"
  },
  boy:{
    bottom:"3%"
  },
  indicator:{
    left:"46%",
    top:"3%"
  },
  distance:{
    backgroundColor:"#35A6AE",
    width:"94%",
    borderRadius:10,
    paddingTop:"7%",
    left:"3%",
    paddingBottom:"2%",
    top:"5%",
      justifyContent:"center",
     alignItems:"center"
  },
  box4:{
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    height:"50%",
    top:"100%"
    
  },
  gpsoffline:{
    backgroundColor:"#FFFFFF",
    width:"6%",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    left:"85%",
    top:"53%"
  },
  gpsonline:{
    backgroundColor:"#FFFFFF",
    width:"6%",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    left:"85%",
     top:"40%"
  },
  storeouterbox:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"5%",
    
  },
  storebox:{
    flexDirection:"row",
    gap:8,
    marginLeft:"5%"

    
  },
  store:{
    backgroundColor:"#F4F4F4",
    width:"94%",
    marginLeft:"3%",
    borderRadius:14,
    paddingBottom:"9%",
    elevation: 5, // Shadow depth
   backgroundColor: '#F4F4F4',

  },
  km:{
    marginRight:"4%"
  },
  innerbox:{
   backgroundColor:"#FFFFFF",
    width:"94%",
    marginLeft:"3%",
    borderRadius:10,
   paddingBottom:"4%" ,
   bottom:'8%',
   elevation: 5, // Shadow depth
   backgroundColor: 'white',

  },
  Acceptbtn:{
    backgroundColor:'#35A6AE',
    borderRadius:10,
    width:"43%",
    bottom:0,
    marginTop:"2%",
    marginLeft:"4%",
    marginRight:0,
    paddingBottom:"5%"
  },
  Ignorebtn:{
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    width:"43%",
    bottom:0,
    marginTop:"2%",
    marginLeft:"4%",
    marginRight:0,
  borderColor:"#F4F4F4",
  borderWidth:2
  },
  ignoretxt:{
    textAlign:'center',
    fontWeight:'500',
    fontSize:18,
    textAlignVertical:"center",
    marginTop:"3%"
  },
  smallbtnbox:{
    flexDirection:"row",
    marginTop:"3%",
    gap:3
  },
  card:{
    marginTop:"80%"
  },
 offlinetxt:{
  fontWeight:'500'
 }

})