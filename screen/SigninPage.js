import React,{useState,useContext} from 'react';
import { AuthContext } from '../route/AuthProvider';

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
  TouchableHighlight
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SigninPage=({navigation})=>
{
    const {email,setEmail,password,setPassword,name,setName,register} = useContext(AuthContext)  

  return (
    <View style={styles.listStyle}>
        <Image 
        style={styles.imageStyle}
        source={require("../assets/signup.png")}
        />
        <Text style={styles.textStyle}>Name</Text>
        <TextInput
        style={styles.textinputStyle}
        onChangeText={(val)=>setName(val)}
        />
        <Text style={styles.textStyle}>Email</Text>
        <TextInput
        style={styles.textinputStyle}
        onChangeText={(val)=>setEmail(val)}
        />
        <Text style={styles.textStyle}>Password</Text>
        <TextInput
        style={styles.textinputStyle}
        onChangeText={(val)=>setPassword(val)}
        />
        <TouchableHighlight style={styles.button} underlayColor='#fff' onPress={()=>{
            navigation.navigate('Details Page')}}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Log In Screen')
        }}>
        <Text style={styles.footer}>Already have an account ?
        <Text style={styles.login}>Login</Text>
        </Text>
        </TouchableOpacity>
       </View>
  );
};

const styles=StyleSheet.create({
    listStyle:{
        display:"flex",
        justifyContent:"center",
        alignItem:"center",
    },
    textStyle:{
        fontSize: 27,
        color:'black',
        fontFamily:"Cochin",
        marginTop:10,
        marginRight:20,
        marginBottom:10,
        marginLeft:25,

    },
    textinputStyle:{
        fontSize: 25,
        color:'black',
        fontFamily:"Cochin",
        marginTop:0,
        marginRight:20,
        marginBottom:10,
        marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'black',
    },
    imageStyle:{
        width:160,
        height:100,
    },
   buttonText:
   {
       backgroundColor:'#174EA1',
       color:'#fff',
       fontSize:27,
       fontFamily:"Cochin",
       padding:15,
       marginTop:5,
       borderRadius:30,
       textAlign:'center',
   },
   button:{
       margin:15,
   },
   footer:{
       fontSize: 20,
       color:'black',
       fontFamily:"Cochin",
       padding:5,
       textAlign:'center',
   },
   login:{
    fontSize: 22,
    fontFamily:"Cochin",
    color:'#013D83',
    padding:5,
   }
});

export default SigninPage;