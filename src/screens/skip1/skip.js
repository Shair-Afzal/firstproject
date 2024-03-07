import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native"
import Skipbtn from '../../components/Skipbtn';
import Arrowbtn from '../../components/Arrowbtn';

const Skip =({navigation}) =>{
    return(
      <View style={styles.page2}>
              
                <Skipbtn  onPress={() => navigation.navigate("Skip2")}/>
                  <View style={styles.page1}>
                <View>
                    <Image source={require('../../assets/img1.png')}/>
                </View>
                <View>
                    <Text style={styles.txt}>Accept a job</Text>
                    <View>
                    <Text style={styles.txt2}>Lorem ipsum dolor sit amet consectetur. 
Lacinia turpis nunc interdum quisque sed
tincidunt. Euismod vulputate venenatis 
nisl proin.</Text>
                    </View>
                    
                </View>
                <View style={styles.img}>
                    <Image source={require('../../assets/dots.png')}/>
                   <Arrowbtn onPress={()=>navigation.navigate("Skip2")}/>
                
                    </View>
                
                    
                
        </View>
        </View>
    )
}
  
export default Skip;
const styles=StyleSheet.create({
page2:{
backgroundColor:'#35A6AE',
fontFamily:"MADE Okine Sans PERSONAL USE",

},
page1:{
    alignItems:"center",
    height:"100%",
    width:'100%',
    gap:30,
    marginTop:50    
},
  txt:{
    fontSize:25,
    color:"#FFFFFF",
    textAlign:"center",
    fontWeight:"900"
  },
  txt2:{
    fontFamily:"MADE Okine Sans PERSONAL USE",
    maxWidth:340,
    marginTop:12,
    fontSize:18,
    color:"#FFFFFF" ,
    fontWeight:"300",
    textAlign:"center"
  },
  img:{
    justifyContent:"center",
    alignItems:"center"
  }

  })