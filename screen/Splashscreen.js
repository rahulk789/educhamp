import React from 'react';

import {
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import { Layout, Button,Text,Input } from '@ui-kitten/components';

export default function Splashscreen({navigation}){
    return(
        <Layout style={styles.listStyle}>
            <Layout style={styles.listStyle}>
            <Image 
    style={styles.imageStyle}
    source={require("../assets/logo.png")}>
    </Image>
    <Text style={styles.subtitleStyle}>Learn   Apply   Grow</Text>
    <Text style={styles.textStyle}>Welcome to EduChamp</Text>
     
    <Button style={styles.button} size ='giant'  onPress={()=>{navigation.navigate('Phone Screen')}}>
            Get Started
            <Image 
            style={styles.arrowStyle}
            source={require("../assets/arrow.png")}
            />
            
    </Button>
            </Layout>
        </Layout>
  );
}

const styles=StyleSheet.create({
    listStyle:{
        width: Dimensions.get('window').width,
        height : Dimensions.get('window').height,
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
    fontFamily:"Cochin",
    padding:10,
    margin:10,
    marginTop: 60,
    textAlign:"center",
},
imageStyle:{
    width:360,
    height:300,
    marginTop:90,
    alignSelf : 'center'
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
    width: 350,
   marginTop:45,
   marginBottom:40,
   alignSelf: 'center',
   borderRadius: 10
},
arrowStyle:{
    width:80,
    height: 15,
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