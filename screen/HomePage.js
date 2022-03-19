import React,{useState,useContext} from 'react';
import styles from '../component/styles/HomePageStyle'
import { View, Text,TextInput ,TouchableOpacity,FlatList,Image} from 'react-native';
import { SearchDropDown } from './SearchDropDown';
import {exam} from '../dummy/dummy'
import ExamCard from '../component/ExamCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../route/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


function HomePage({navigation}) {
  
  const [dataSource] = useState(['JEE Main', 'JEE Advance', 'KCET', 'Comedek', 'UPSC', 'Gate', 'JEECUP Entrance Exam', ' CAT Entrance exam','JAM Entrance Exam','CEED Entrance Exam',' PGEE Entrance Exam'])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const {logout,name} = useContext(AuthContext)
  // function getUsername(documentSnapshot) {
  //   return documentSnapshot.get('name');
  // }
  // const [username,setUsername] = useState('User')

  // firestore()
  // .collection('users')
  // .doc(auth().currentUser.uid)
  // .get()
  // .then(documentSnapshot => getUsername(documentSnapshot))
  // .then(name => {
  //   setUsername(name);
  // });

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
      <Text style={styles.text}>Hi, {name}</Text>
      <Icon name='user-circle' style={styles.usericon} size={55} selectionColor='white' color={'white'} onPress={()=>{logout()}}/>
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
        onPress={()=>{navigation.navigate('Career Page')}}>
        <Text style={styles.navText}>Career Path</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Academics Page')}}>
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
    <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.navigate('Chat Screen')}} style={styles.TouchableOpacityStyle} >
        <Image source={require("../assets/chatbot.png")} 
          style={styles.FloatingButtonStyle} />
    </TouchableOpacity>
    }
    </>
  )
}

export default HomePage

