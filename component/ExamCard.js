import React from "react";
import {View,Text,Image} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

export default ExamCard = ({ title ,img}) => (
    <View style={styles.card}>
      <Image source={img} style={styles.img}/>
      {/* <ImageBackground source={img} style={styles.img} imageStyle={{borderTopLeftRadius: 15,borderTopRightRadius:15}}/> */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const styles = ScaledSheet.create({
    card : {
        borderRadius : '15@s',
        backgroundColor: '#888888',
        marginVertical: 8,
        marginHorizontal: 10,
        height: '200@s',
        borderColor : 'white',
        elevation : 10,
        
      },
      title: {
        color: 'white',
        fontStyle : 'normal',
        marginTop: '10@s',
        marginLeft: '10@s',
        fontSize: 25,
      },
      img: {
        height: '150@s',
        width : '100%',
        borderTopLeftRadius : '15@s',
        borderTopRightRadius : '15@s'
      },
  })