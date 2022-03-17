import React, { useReducer } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TextInput,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

export default function Splashscreen(){
    return(
        <View style={styles.listStyle}>
        <LinearGradient colors={['#94EEE3','#B8C8E1']}
        style={styles.lineargradientBackground}>
            <View style={styles.listStyle}>
            <Image 
    style={styles.imageStyle}
    source={require("./assets/logo.png")}>
    </Image>
    <Text style={styles.subtitleStyle}>Learn   Apply   Grow</Text>
    <Text style={styles.textStyle}>Welcome to EduChamp</Text>
     
    <TouchableHighlight style={styles.button} underlayColor='#fff'>
            <Text style={styles.buttonText}>Get Started
            <Image 
            style={styles.arrowStyle}
            source={require("./assets/arrow.png")}
            />
            </Text>
    </TouchableHighlight>
            </View>
            </LinearGradient>
        </View>
  );
}

const styles=StyleSheet.create({
    listStyle:{
        display:"flex",
        justifyContent:"center",
        alignItem:"center",
    },
   lineargradientBackground:{
       height:740,
       width:360,
   },
   textStyle:{
    fontSize: 30,
    color:'black',
    fontFamily:"Cochin",
    padding:10,
    margin:10,
    textAlign:"center",
},
imageStyle:{
    width:360,
    height:300,
    marginTop:90,
},
buttonText:
{
   backgroundColor:'#174EA1',
   color:'#fff',
   fontSize:27,
   fontFamily:"Cochin",
   padding:15,
   borderRadius:30,
   textAlign:'center',
},
button:{
   marginTop:45,
   marginBottom:20,
   marginLeft:20,
   marginRight:20,
},
arrowStyle:{
    width:80,
    height:20,
    marginLeft:5,
    marginTop:7,
    padding:5,
},
subtitleStyle:{
    fontSize: 27,
    color:'#17a2ed',
    fontFamily:"Cochin",
    paddingTop:0,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    marginRight:10,
    marginBottom:70,
    marginLeft:10,
    textAlign:"center",
}
});