import React, { useState, useContext} from "react";

import {
  Text,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ScaledSheet } from 'react-native-size-matters';
import { AuthContext } from "../route/AuthProvider";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({navigation}) {
  const [email,setEmail]= useState('eg');
  const [password,setPassword] = useState('eg');
  const {login}=useContext(AuthContext)
  return (
    
    <SafeAreaView style={styles.body}>
      <Image source={require("../assets/login.png")} style={styles.loginimg}></Image>
      <View style={styles.container}>
        <Text style={styles.number}>Email</Text>
        <TextInput
          style={styles.enternumber}
          onChangeText={(val)=>setEmail(val)}
        />
        <Text style={styles.password}>Password</Text>
        <TextInput placeholder="___________________________________" style={styles.enterpass}  onChangeText={(val)=>setPassword(val)} />
        <Text style={styles.forgot}>Forgot password?</Text>
      </View>

      <TouchableOpacity
        style={styles.submit}
        underlayColor="#fff"
        onPress={()=>login(email,password)}
      >
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign In Screen')}>
      <Text style={styles.signin}>Dont't have an account? Sign in</Text>
      </TouchableOpacity>
      <View style={{marginTop:17 ,flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 38, textAlign: "center", fontSize:15 }} >  OR </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <View style={styles.last}>
        <Text style={styles.connect}>Connect With &nbsp;
        <Image
         source={require("../assets/google_logo.png")}
          style={styles.image}
          
        ></Image>
        </Text>
        
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = ScaledSheet.create({
  
  body:{
   padding:"18@s",
   
   
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  loginimg:{
    
    
    
    height:"240@s",
    width:"320@s"
  },
  image: {
    height: "20@s",
    width: "20@s",
    marginLeft: "200@s",
   
   
  },
  forgot: {
    color: "#021C3A",
    marginLeft:"93@s",
    marginTop:5,
    fontSize:"14@s"
  },
  signin: {
    marginTop:"12@s",
    marginLeft:"45@s",
    fontSize:"15@s",
    color:"black"
  },

  number: {
    marginTop: "1@s",
    marginLeft: "13@s",
    fontSize: "19@s",
    
  },
  connect: {
    
   
    fontSize:"18@s",
    padding:6,
    marginLeft:"70@s",
    
  },
  enternumber: {
    marginTop: "2@s",
    marginLeft: "8@s",
    fontSize: "20@s",
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
  password: {
    marginTop: 15,
    marginLeft: "13@s",
    fontSize: "19@s",
  },
  enterpass: {
    marginLeft: "6@s",
    fontSize: '20@s',
    marginTop:'2@s',
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
  button: {
    borderRadius: "50@s",
    width: "8@s",
    
  },
  submit: {
    marginRight: "40@s",
    marginLeft: "40@s",
    marginTop: "10@s",
    
  },
  submitText: {
    paddingTop: "10@s",
    paddingBottom: "10@s",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#1B3D94",
    borderRadius: "100@s",
    borderWidth: "1@s",
    borderColor: "#fff",
    fontSize:"20@s"
  }
}
);
