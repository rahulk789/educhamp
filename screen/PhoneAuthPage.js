import React, { useState, useContext,useEffect} from "react";

import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,Dimensions,
} from "react-native";

import { ScaledSheet } from 'react-native-size-matters';
import { AuthContext } from "../route/AuthProvider";
import { Icon,Layout, Button,Text,Input } from '@ui-kitten/components';


export default function PhoneAuthPage({navigation}) {
  const {google,phone,}=useContext(AuthContext)
  const [numb,setNumb] = useState('')

  const sendNumber = async(num) => {
    let newText = '+91 ';
    let clean = (''+ num).replace(/\D/g,'');
    for (var i =0;i< clean.length;i++)
    newText = newText + clean[i];
    console.log("NEW PHONE NUMBER",newText);
    await phone(newText)
    .then(()=>{ navigation.navigate('OTP Screen')})
    .catch((e)=>{navigation.navigate('Error Screen')});
  
}
  
  return (
    <ScrollView>    
    <Layout style={styles.body}>
      <Image source={require("../assets/6333218.png")} style={styles.loginimg}></Image>
        <Text style={styles.number}>Mobile Number</Text>
        <Input
        value={numb}
          placeholder='Enter your mobile number'
          style={styles.enternumber}
          size= 'large'
          status='info'
          onChangeText={(val)=>setNumb(val)}
        />
      <Button style={styles.submit} underlayColor="#fff" onPress={()=>sendNumber(numb)}>
      OTP
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Email Screen')}>
      <Text style={styles.signin} category='h1'>Login with Email ?</Text>
      </TouchableOpacity>
      <Layout style={{marginTop:17 ,flexDirection: "row", alignItems: "center" }}>
        <Layout style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <Layout>
          <Text style={{ width: 38, textAlign: "center", fontSize:15 }} >  OR </Text>
        </Layout>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </Layout>
      <Layout style={styles.last}>
        <TouchableOpacity onPress={async()=>{await google()
        .then(()=>{ navigation.navigate('OTP Screen')})
        .catch((e)=>{navigation.navigate('Error Screen')})}}>
        <Text style={styles.connect}>Connect With &nbsp;
        <Image
         source={require("../assets/google_logo.png")}
          style={styles.image}
        />
        </Text>
        </TouchableOpacity>
      </Layout>
    </Layout>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  
  body:{
  width : Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  padding:"10@s",
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },
  loginimg:{
    marginTop : '30@s',
    height:"300@s",
    width:"315@s"
  },
  image: {
    height: "20@s",
    width: "20@s",
    marginLeft: "200@s",
  },
  forgot: {
    marginTop:65,
    fontSize:"14@s",
    alignSelf: 'center'
  },
  signin: {
    marginTop:"12@s",
    alignSelf: 'center',
    fontSize:"15@s",
  },
  number: {
    marginTop: "60@s",
    marginLeft: "6@s",
    fontSize: "19@s",
    
  },
  last :{
    alignSelf : 'center'
  },
  connect: {
    fontSize:"18@s",
    padding:6,
  },
  enternumber: {
    height : '15@s',
    marginTop: "15@s",
    alignSelf: 'center',
    borderRadius: '10@s'
  },
  password: {
    marginTop: 45,
    marginLeft: "6@s",
    fontSize: "19@s",
  },
  enterpass: {
    height : '15@s',
    alignSelf: 'center',
    fontSize: '20@s',
    marginTop:'15@s',
    borderRadius: '10@s'
  },
  button: {
    borderRadius: "50@s",
    width: "8@s",
    
  },
  submit: {
    height: "42@s",
    width: "330@s",
    alignSelf: 'center',
    marginTop: "50@s",
    borderRadius: "15@s",
    margin: '2@s'
  },
  submitText: {
    paddingTop: "10@s",
    paddingBottom: "10@s",
    color: "#fff",
    textAlign: "center",
    borderRadius: "100@s",
    fontSize:"50@s"
  }
}
);
