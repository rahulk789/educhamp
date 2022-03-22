import React, { useState, useContext} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  ScrollView,TouchableOpacity
} from "react-native";

import { ScaledSheet } from 'react-native-size-matters';
import { AuthContext } from "../route/AuthProvider";
import { Icon,Layout, Button,Text,Input } from '@ui-kitten/components';


export default function Login({navigation}) {

  const [email,setEmail]= useState('eg');
  const [password,setPassword] = useState('eg');
  const {login}=useContext(AuthContext)
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );
  const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
      </View>
    )
  }

  return (
    <ScrollView>    
    <Layout style={styles.body}>
      <Image source={require("../assets/login.png")} style={styles.loginimg}></Image>
      
        <Text style={styles.number}>Email</Text>
        <Input
          placeholder='example@gmail.com'
          style={styles.enternumber}
          size= 'large'
          status='info'
          onChangeText={(val)=>setEmail(val)}
        />
        <Text style={styles.password}>Password</Text>
        <Input
          style = {styles.enterpass}
          status = 'info'
          placeholder='Enter your Password'
          size={'large'}
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={val => setPassword(val)}
    />
        <Text style={styles.forgot}>Forgot password?</Text>
     
      <Button style={styles.submit} underlayColor="#fff"   onPress={()=>login(email,password)}>
      Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Sign In Screen')}>
      <Text style={styles.signin}>Dont't have an account? Sign in</Text>
      </TouchableOpacity>
      <Layout style={{marginTop:17 ,flexDirection: "row", alignItems: "center" }}>
        <Layout style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <Layout>
          <Text style={{ width: 38, textAlign: "center", fontSize:15 }} >  OR </Text>
        </Layout>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </Layout>
      <Layout style={styles.last}>
        <TouchableOpacity onPress={async()=>{await login(email,password)
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
    height:"270@s",
    width:"320@s"
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
    marginTop: "5@s",
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
    marginTop: "10@s",
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
