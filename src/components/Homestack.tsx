import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
 import{NavigationContainer} from '@react-navigation/native'
 import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../mainscreens/home/Home';
 import Details from '../mainscreens/home/Details';
import Chat from '../mainscreens/home/chat';
import Call from '../mainscreens/home/Call';
  const Stack = createNativeStackNavigator();
  const HomeStack=()=>{
    return(
       
       
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={Details} options={{ tabBarVisible: false }} /> 
                <Stack.Screen name="Chat" component={Chat} options={{ tabBarVisible: false }}/>
                <Stack.Screen name="Call" component={Call} options={{ tabBarVisible: false }}/>
            </Stack.Navigator>
      
    )
  }
  export default HomeStack;