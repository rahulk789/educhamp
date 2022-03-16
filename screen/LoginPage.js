import React from "react";

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

import { ScaledSheet } from 'react-native-size-matters';


export default function Login() {
  return (
    
    <SafeAreaView style={styles.body}>
      <Image source={require("../assets/login.png")} style={styles.loginimg}></Image>
      <View style={styles.container}>
        <Text style={styles.number}>Mobile Number</Text>
        <TextInput
          placeholder="___________________________________"
          style={styles.enternumber}
        />
        <Text style={styles.password}>Password</Text>
        <TextInput placeholder="___________________________________" style={styles.enterpass} />
        <Text style={styles.forgot}>Forgot password?</Text>
      </View>

      <TouchableHighlight
        style={styles.submit}
      
        underlayColor="#fff"
      >
        <Text style={styles.submitText}>Login</Text>
      </TouchableHighlight>
      <Text style={styles.signin}>Dont't have an account? Sign in</Text>
      
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
    marginTop:1,
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
  },
  password: {
    marginTop: "4@s",
    marginLeft: "13@s",
    fontSize: "19@s",
  },
  enterpass: {
    marginLeft: "6@s",
    fontSize: '20@s',
    marginTop:'2@s'
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
