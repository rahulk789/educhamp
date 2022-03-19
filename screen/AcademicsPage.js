import React,{useState} from 'react';
import { View, Text,TouchableOpacity,FlatList,ImageBackground,Image} from 'react-native';
import {career_path} from '../dummy/dummy'
import styles from '../component/styles/AcdemicsPageStyle'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AcademicsCard from '../component/styles/AcademicsCard';

function Academic({navigation}) {

    const renderItem = ({ item }) => (
        <AcademicsCard title={item.name} img={item.image} />
    )
        const img = require('../assets/acedamic.png')
    return (
      <>
     <View style={styles.container}>
      <ImageBackground style={styles.backgroud_img} source={img}/>
      <Icon name='user-circle' style={styles.usericon} size={55} selectionColor='white' color={'white'}/>
         <View style={styles.topNav}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Home Page')}}>
        <Text style={styles.navText}>Exam</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Career Page')}}>
        <Text style={styles.navText}>Career Path</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navTextClicked}>Academics</Text>
        </TouchableOpacity>
      </View>
     </View>
     <FlatList
     data={career_path}
     renderItem = {renderItem}
     keyExtractor = {career_path=>career_path.id}
     />
     <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.navigate('Chat Screen')}} style={styles.TouchableOpacityStyle} >
        <Image source={require("../assets/chatbot.png")} 
          style={styles.FloatingButtonStyle} />
    </TouchableOpacity>
     </>
  )
}

export default Academic