import React from 'react'

import {
    Image,
    ScrollView,
    Dimensions
  } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ScaledSheet } from 'react-native-size-matters';
import {Layout,Text } from '@ui-kitten/components';

function ErrorPage({navigation}) {
  return (
      <ScrollView>
    <Layout styles={styles.body}>
        <Icon name='chevron-left' style={styles.icon} size={40} color='white' onPress={()=>{navigation.pop()}}/>
        <Image source={require("../assets/404.png")} style={styles.img}></Image>
    <Text category={'h5'} style={styles.text}>Oops!,Something went wrong</Text>
    </Layout>
    </ScrollView>
  )
}

export default ErrorPage

const styles = ScaledSheet.create({
    body: {
        width : Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding:"10@s",
    },
    icon:{
        position: 'absolute',
        marginTop : 10,
        marginRight : 60,
    },
    img:{
        marginTop : '80@s',
        height:"400@s",
        width:"400@s",
        alignSelf: 'center'
      },
      text : {
        marginTop: '30@s',
        alignSelf: 'center',
        paddingBottom: '200@s' 
      },
})