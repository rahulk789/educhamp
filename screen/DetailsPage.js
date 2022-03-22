import React, {useState,useContext} from 'react';
import {TextInput, Image, ImageBackground} from 'react-native';
import {
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../route/AuthProvider';
import { Layout, Button,Text,Input } from '@ui-kitten/components';

const data = [
  {label: 'Subject 1', value: '1'},
  {label: 'Subject 2', value: '2'},
  {label: 'Subject 3', value: '3'},
  {label: 'Subject 4', value: '4'},
  {label: 'Subject 5', value: '5'},
  {label: 'Subject 6', value: '6'},
  {label: 'Subject 7', value: '7'},
  {label: 'Subject 8', value: '8'},
];

const Details = () => {
  const [selected, setSelected] = useState([]);
  const [grade, setGrade] = useState(null);
  const [dob,setdob] = useState(null);
  const [school,setSchool]= useState(null);
  const [state, setstate] = useState(null);
  const [city, setCity] = useState(null);
  const {register} = useContext(AuthContext)
  
  return (
    <ScrollView>
    <Layout style={styles.body}>
      <Text style={styles.complete}>Complete your profile!</Text>
      <Text style={styles.class}>Class/Grade</Text>
      <Input
        placeholder="____________________________________________________"
        style={styles.enter}
        onChangeText={(val)=>setGrade(val)}></Input>
      <Text style={styles.dob}>Date of Birth</Text>
      <Input
        placeholder="____________________________________________________"
        style={styles.enter}
        onChangeText={(val)=>setdob(val)}></Input>
      <Text style={styles.school}>School</Text>
      <Input
        placeholder="____________________________________________________"
        style={styles.enter}
        onChangeText={(val)=>setSchool(val)}></Input>
      <Text style={styles.state}>State</Text>
      <Input
        placeholder="____________________________________________________"
        style={styles.enter}
        onChangeText={(val)=>setstate(val)}></Input>
      <Text style={styles.city}>City</Text>
      <Input
        placeholder="____________________________________________________"
        style={styles.enter}
        onChangeText={(val)=>setCity(val)}></Input>

      {/* <Button title=""></Button> */}
      <TouchableHighlight style={styles.sub} underlayColor="#fff">
        <Text style={styles.subText}>Interested Subjects</Text>
      </TouchableHighlight>
      <Layout style={styles.container}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select subject"
          searchPlaceholder="Search..."
          value={selected}
          onChange={item => {
            setSelected(item);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          selectedStyle={styles.selectedStyle}
        />
      </Layout>

      <TouchableHighlight style={styles.submit} underlayColor="#fff"
      onPress={()=>{
        register(grade,dob,school,state,city,selected)
      }}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableHighlight>
    </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 4,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#1B3D94',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 25,
  },
  sub: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  subText: {
    paddingTop: 8,
    paddingBottom: 8,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#2d9afe',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 21,
  },
  complete: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
  },
  class: {
    marginTop: 22,
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  dob: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  school: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  state: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  city: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  enter: {
    marginLeft: 14,
    fontSize: 18,
  },
  container: {padding: 10,
  },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 18,
    color:"black"
  },
  selectedTextStyle: {
    fontSize: 15,
    color:"#888a87"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});

export default Details;
