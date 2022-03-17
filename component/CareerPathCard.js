import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

export default CareerPathCard = ({ title ,img}) => (
    <TouchableOpacity activeOpacity={0.9} onPress={()=>{}}>
    <View style={styles.card}>
      <Image source={img} style={styles.img}/>
      <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
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
        borderTopRightRadius : '15@s',
      },
      
})