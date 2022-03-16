import React,{useState} from 'react';
import { View, Text,TextInput ,TouchableOpacity,FlatList,ImageBackground} from 'react-native';
import {career_path} from '../dummy/dummy'
import CareerPathCard from '../component/CareerPathCard';
import styles from '../component/styles/CareerPathPageStyle'

function CareerPath() {

    const renderItem = ({ item }) => (
        <CareerPathCard title={item.name} img={item.image} />
    )
        const img = {uri: "https://i.postimg.cc/MpG75b4N/Rectangle-10.png"}
    return (
      <>
     <View style={styles.container}>

         <ImageBackground style={styles.backgroud_img} source={img}/>
         
         <View style={styles.topNav}>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navText}>Exam</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navTextClicked}>Career Path</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navText}>Academics</Text>
        </TouchableOpacity>
      </View>
     </View>
     <FlatList
     data={career_path}
     renderItem = {renderItem}
     keyExtractor = {career_path=>career_path.id}
     />
     </>
  )
}

export default CareerPath