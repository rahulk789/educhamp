import React,{useState} from 'react';
import styles from '../component/styles/HomePageStyle'
import { View, Text,TextInput ,TouchableOpacity,FlatList,Image} from 'react-native';
import { SearchDropDown } from './SearchDropDown';
import {exam} from '../dummy/dummy'
import ExamCard from '../component/ExamCard';
import Icon from 'react-native-vector-icons/FontAwesome5';



function HomePage() {
  
  const [dataSource] = useState(['apple', 'banana', 'cow', 'dex', 'zee', 'orange', 'air', 'bottle','ram','dam','sam','can','rat','fat','glad'])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)

  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  
  const renderItem = ({ item }) => (
      <ExamCard title={item.name} img={item.image} />
    )

  return (
    <>
    <View style= {styles.container}>
      <View style={styles.header}>
      <Text style={styles.text}>Hi, User</Text>
      <Icon name='user-circle' style={styles.usericon} size={55} selectionColor='white' color={'white'}/>
      </View>
      <TextInput 
      style={styles.textfield} 
      placeholder="Search"
      placeholderTextColor='#494949'
      onChangeText={onSearch}
      ></TextInput>
      <View style={styles.topNav}>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navTextClicked}>Exam</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navText}>Career Path</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{}}>
        <Text style={styles.navText}>Academics</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
    {
      searching&& <SearchDropDown 
      onPress={() => {setSearching(false)}}
      dataSource={filtered}/>
      }
      
    <FlatList
    data={exam}
    renderItem = {renderItem}
    keyExtractor = {exam=>exam.id}
    />
    {
      !searching &&
    <TouchableOpacity activeOpacity={0.5} onPress={()=>{}} style={styles.TouchableOpacityStyle} >
        <Image source={require("../assets/chatbot.png")} 
          style={styles.FloatingButtonStyle} />
    </TouchableOpacity>
    }
    </>
  )
}

export default HomePage

