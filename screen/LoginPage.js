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
import { s, vs, ms, mvs } from 'react-native-size-matters';


import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';


export default function Login() {
  return (
    <SafeAreaView style={palak.body}>
      <Image source={require("C:\\Users\\palak\\OneDrive\\Desktop\\educhamp\\assets\\login.png")} style={palak.loginimg}></Image>
      <View style={palak.container}>
        <Text style={palak.number}>Email/Mobile Number</Text>
        <TextInput
          style={palak.enternumber}
        />
        <Text style={palak.password}>Password</Text>
        <TextInput style={palak.enterpass} />
        <Text style={palak.forgot}>Forgot password?</Text>
      </View>

      <TouchableHighlight
        style={palak.submit}
      
        underlayColor="#fff"
      >
        <Text style={palak.submitText}>Login</Text>
      </TouchableHighlight>
      <Text style={palak.signin}>Dont't have an account? Sign in</Text>
      
      <View style={{marginTop:17 ,flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 38, textAlign: "center", fontSize:15 }} >  OR </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <View style={palak.last}>
        <Text style={palak.connect}>Connect With &nbsp;
        <Image
         source={require("C:\\Users\\palak\\OneDrive\\Desktop\\educhamp\\assets\\google_logo.png")}
          style={palak.image}
          
        ></Image>
        </Text>
        
      </View>
      
    </SafeAreaView>
    
  );
}

const palak = ScaledSheet.create({
  // last:{
   
   
  //   marginLeft:"11@s"
  // },
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
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
  password: {
    marginTop: "4@s",
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
