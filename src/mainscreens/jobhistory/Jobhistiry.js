import React, { useState } from 'react'
import {View,Text, StyleSheet,ScrollView,TouchableOpacity,Image} from "react-native"
import Textcard from "../../components/Textcard"

const JobHistory = () => {
  const [show,setShow]=useState(true)
  return (
   <ScrollView style={styles.body}>
    <Text style={styles.jobhistorytxt}>Jobs History</Text>
    <View style={styles.box}>
      <Text style={styles.todaytxt}>Today</Text>
      <TouchableOpacity onPress={()=>setShow(false)}>
      <Text style={styles.clearhistorytxt}>Clear History</Text>
      </TouchableOpacity>
    </View>
    {
      show?
      <View>
    
    <View style={styles.card}>
    <View style={styles.store}>
    <View style={styles.storeouterbox}>
    <View style={styles.storebox}>
          <Image source={require("../../assets/storeimg.png")}/>
          <Image source={require("../../assets/servaid.png")}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.containertxt}>Upcoming</Text>
          </View>
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
        <TouchableOpacity>
        <Text style={styles.viewtxt}>View details</Text>
        </TouchableOpacity>
        
        </View>
    </View>
    <View style={styles.card2}>
    <View style={styles.store}>
    <View style={styles.storeouterbox}>
    <View style={styles.storebox}>
          <Image source={require("../../assets/storeimg.png")}/>
          <Image source={require("../../assets/servaid.png")}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.containertxt}>Pending</Text>
          </View>
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
        <TouchableOpacity>
        <Text style={styles.viewtxt}>View details</Text>
        </TouchableOpacity>
        
        </View>
    </View>
    <View style={styles.card3}>
    <View style={styles.store}>
    <View style={styles.storeouterbox}>
    <View style={styles.storebox}>
          <Image source={require("../../assets/storeimg.png")}/>
          <Image source={require("../../assets/servaid.png")}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.containertxt}>Completed</Text>
          </View>
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
        <TouchableOpacity>
        <Text style={styles.viewtxt}>View details</Text>
        </TouchableOpacity>
        
        </View>
    </View>
    </View>:
    null

}
    
   </ScrollView>
  )
}

export default JobHistory;
const styles=StyleSheet.create({
  body:{
    backgroundColor:"#FFFFFF",
    flex:1,
    fontFamily:"MADE Okine Sans PERSONAL USE",
  },
  jobhistorytxt:{
    fontSize:24,
    color:"black",
    top:"2%",
    fontWeight:"500",
    marginLeft:"4%",
    marginTop:"1%"
  },
  box:{
 flexDirection:"row",
 justifyContent:'space-between',
marginTop:"12%",
marginBottom:"2%"

  },
  todaytxt:{
    fontSize:16,
    color:"black",
    fontWeight:"600",
    marginLeft:"4%",
  },
  clearhistorytxt:{
    fontSize:16,
    color:"#35A6AE",
    fontWeight:"600",
    marginRight:"4%"
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
  km:{
    marginRight:"4%"
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
   viewtxt:{
    fontSize:16,
    color:"#35A6AE",
    fontWeight:"600",
    textAlign:"center",
    top:"50%",
   },
   card2:{
    bottom:"1%"
   },
   card3:{
        bottom:"2%" 
   },
   
   container:{
    backgroundColor:"#35A6AE",
    width:"35%",
    borderRadius:10,
    right:"15%"
   },
   containertxt:{
    textAlign:"center",
    fontSize:18,
    color:"#FFFFFF",
    top:"15%"
   }

})