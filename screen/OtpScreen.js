import React,{useContext} from 'react'
import OTPTextInput from 'react-native-otp-textinput'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from "../route/AuthProvider";
import { Layout, Button,Text } from '@ui-kitten/components';


function OtpScreen({navigation}) {
    const {otp,code,setCode}=useContext(AuthContext)
    return (
    <Layout style={styles.body}>
        <Icon name='chevron-left' style={styles.icon} size={40} color='white' onPress={()=>{navigation.pop()}}/>
        <Text category='h5' style={styles.title} >Enter the Otp</Text>
        <OTPTextInput  
        handleTextChange = {(val)=>{setCode(val)}}
        tintColor = 'grey'
        offTintColor = '#3366ff'
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
        inputCount = {6}
        />
        <Button style={styles.button} size={'large'} onPress={async()=>{otp().then(navigation.navigate('Details Page')).catch((e)=>{navigation.navigate('Error Screen')})}}>Submit</Button>
    </Layout>
  )
}

export default OtpScreen

const styles=StyleSheet.create({
    title:{
       marginTop : 60,
       marginBottom: 20,
       fontSize:25 
    },
    icon:{
        marginTop : 10,
        marginRight : 60,
    },
    button:{
        marginTop: 40,
        borderRadius: 15
    },
    body: {
        padding:20,
        height : 800,
        maxHeight: 900
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 3,
    },
})