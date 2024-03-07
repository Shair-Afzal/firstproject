import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
 import{NavigationContainer} from '@react-navigation/native'
 import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Skip from './src/screens/skip1/skip';
import Skip2 from './src/screens/skip2/skip2';
import Page from './src/screens/page1/page1';
import Login from './src/screens/loginin/Login'
import SIGN from './src/screens/signin/sign';
import Email from './src/screens/email/Email';
import Location from './src/screens/location/location';
import Information from './src/screens/completeinformation/completeinformation';
import cards from './src/screens/information/information ';
import Upload from './src/screens/information/information ';
import Identification from './src/screens/identification/identification';
import VechileInformation from './src/screens/vechileinformation/Vechileinformation';
import VerifyEmail from './src/screens/verifyemail/Verifyemail';
import Licens from './src/screens/Licens/Licens';
import Home from './src/mainscreens/home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import JobHistory from './src/mainscreens/jobhistory/Jobhistiry';
import Notification from './src/mainscreens/Notifications/Notification';
import Profile from './src/mainscreens/Profile/profile';
import HomeScreen from './src/mainscreens/home/Home';
import HomeStack from './src/components/Homestack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// const Stack = createNativeStackNavigator();
 const Tab=createBottomTabNavigator();
const App = () => {
  
   return(
     <NavigationContainer>
       {/* <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='Skip' component={Skip}/>
        <Stack.Screen name='Skip2' component={Skip2}/>
        <Stack.Screen name='Page' component={Page}/>
        <Stack.Screen name='Location' component={Location}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Email' component={Email}/>
        <Stack.Screen name='VerifyEmail' component={VerifyEmail}/>
        <Stack.Screen name='SIGN' component={SIGN}/>
        <Stack.Screen name='Information' component={Information}/>
        <Stack.Screen name='Upload' component={Upload}/>
        <Stack.Screen name='Identification' component={Identification}/>
        <Stack.Screen name='Licens' component={Licens}/>
        <Stack.Screen name='VechileInformation' component={VechileInformation}/>
      </Stack.Navigator>  */}
      <Tab.Navigator
       screenOptions={{
           headerShown:false,
           tabBarActiveTintColor:"#35A6AE",
           tabBarShowLabel:false,
           tabBarStyle:{height:"9%"},
        } } 
     
      >
            <Tab.Screen name="HomeScreen" component={HomeStack}
            // options={{
            //   tabBarIcon:({focused})=>(
            //     <View style={{borderRadius:13,height:50,width:50,backgroundColor:"#F3F3F3",justifyContent:"center",alignItems:"center" }}>
            //       <Image 
            //     source={require("./src/assets/home3.png")} 
            //      style={{ tintColor:focused ? "#35A6AE":"black"}}/>
            //     </View>
                
                
            //   )
            // }}
            options={({ route }) => ({
              tabBarVisible: route.state && route.state.index === 0,
              tabBarIcon: ({ focused }) => (
                <View style={{ borderRadius: 13, height: 50, width: 50, backgroundColor: "#F3F3F3", justifyContent: "center", alignItems: "center" }}>
                  <Image 
                    source={require("./src/assets/home3.png")} 
                    style={{ tintColor: focused ? "#35A6AE" : "black" }}
                  />
                </View>
              ),
            })}
            />
            <Tab.Screen name="JobHistory" component={JobHistory}
            options={{
              tabBarIcon:({focused})=>(
                <View style={{borderRadius:13,height:50,width:50,backgroundColor:"#F3F3F3",justifyContent:"center",alignItems:"center" }}>
                  <Image 
                source={ require("./src/assets/jobhistory.png")} 
                 style={{ tintColor:focused ? "#35A6AE":"black"}}/>
                </View>
              )
            }}/>
            <Tab.Screen name="Notification" component={Notification}
            options={{
              tabBarIcon:({focused})=>(
                <View style={{borderRadius:13,height:50,width:50,backgroundColor:"#F3F3F3",justifyContent:"center",alignItems:"center" }}>
                  <Image 
                source={ require("./src/assets/notification.png")} 
                 style={{ tintColor:focused ? "#35A6AE":"black"}}/>
                </View>
                
              )
            }}
            />
            <Tab.Screen name="Profile" component={Profile}
            options={{
              tabBarIcon:({focused})=>(
                <View style={{borderRadius:13,height:50,width:50,backgroundColor:"#F3F3F3",justifyContent:"center",alignItems:"center"}}>
                   <Image 
                source={ require("./src/assets/Profile.png")} 
                 style={{ tintColor:focused ? "#35A6AE":"black"}}/>
                </View>
               
              )
            }}
            />
        </Tab.Navigator>
     </NavigationContainer>
   )
}
export default App;