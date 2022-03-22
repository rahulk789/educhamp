import React,{useState,useContext} from 'react';
import { AuthContext } from '../route/AuthProvider';
import Icon from 'react-native-vector-icons/Feather';
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import { Layout, Button,Text,Input } from '@ui-kitten/components';

const SigninPage=({navigation})=>
{
    const {email,setEmail,password,setPassword,register} = useContext(AuthContext)  
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };
  
    const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} style={styles.icon} size={25} color='#0095ff' name={secureTextEntry ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
    );
    const AlertIcon = (props) => (
      <Icon {...props} name='alert-circle'/>
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
          
    <Layout style={styles.listStyle}>
    <Icon name='chevron-left' style={styles.icons} size={40} color='white' onPress={()=>{cossole.log("CLICKED");navigation.pop()}}/>
        <Image 
        style={styles.imageStyle}
        source={require("../assets/signup.png")}
        />
        <Text style={styles.textStyle}>Email</Text>
        <Input
          style={styles.button}
          placeholder='example@gmail.com'
          size= 'large'
          status='info'
          onChangeText={(val)=>setEmail(val)}
        />
        <Text style={styles.textStyle}>Password</Text>
        <Input
          style = {styles.button}
          status = 'info'
          placeholder='Enter Password'
          size={'large'}
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={val => setPassword(val)}
        />
        <Text style={styles.con_pass}> Confirm Password</Text>
        <Input
          style = {styles.button}
          status = 'info'
          placeholder='Enter Password'
          size={'large'}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
    />
    <Button style={styles.button} underlayColor="#fff"   onPress={async()=>{await register().then(()=>{ navigation.navigate('Details Screen')}).catch((e)=>{navigation.navigate('Error Screen')})}}>
      SignUp
      </Button>
       </Layout>
       </ScrollView>
  );
};

const styles=StyleSheet.create({
    listStyle:{
        height: 900
    },
    textStyle:{
        fontSize: 27,
        marginTop:10,
        marginRight:25,
        marginBottom:10,
        marginLeft:25,

    },
    con_pass:{
        fontSize: 27,
        marginTop:10,
        marginRight:25,
        marginBottom:10,
        marginLeft:15,

    },
    icons:{
        position: 'absolute',
        marginTop : 10,
        marginRight : 60,
    },
    layout: {
        marginTop: 250
    },
    textinputStyle:{
        fontSize: 25,
        color:'black',
        fontFamily:"Cochin",
        marginTop:0,
        marginRight:20,
        marginBottom:10,
        marginLeft:20,
        borderRadius: 10
    },
    last :{
        alignSelf : 'center'
      },
    imageStyle:{
        width:420,
        height:330,
        alignSelf: 'center',
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
       borderRadius: 15
   },
   footer:{
       fontSize: 20,
       fontFamily:"Cochin",
       padding:5,
       textAlign:'center',
   },
   login:{
    fontSize: 22,
    fontFamily:"Cochin",
    color:'#3b66ff',
    padding:5,
   }
});

export default SigninPage;