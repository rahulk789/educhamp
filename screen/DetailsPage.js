import React from "react";
import { Text, TextInput, Image, ImageBackground} from "react-native";
import { SafeAreaView,Button,TouchableHighlight, StyleSheet, View } from "react-native";


export default function Details()
{
    return(
      
          
          <SafeAreaView style={styles.body}>
                <Text style={styles.complete}>
                   Complete your profile!
               </Text>
               <Text style={styles.class}>Class/Grade</Text>
               <TextInput placeholder="____________________________________________________" style={styles.enter}></TextInput>
               <Text style={styles.dob}>Date of Birth</Text>
               <TextInput placeholder="____________________________________________________" style={styles.enter}></TextInput>
               <Text style={styles.school}>School</Text>
               <TextInput placeholder="____________________________________________________" style={styles.enter} ></TextInput>
               <Text style={styles.state}>State</Text>
               <TextInput placeholder="____________________________________________________" style={styles.enter}></TextInput>
               <Text style={styles.city}>City</Text>
               <TextInput placeholder="____________________________________________________" style={styles.enter} ></TextInput>

               {/* <Button title=""></Button> */}
               <TouchableHighlight
        style={styles.sub}
      
        underlayColor="#fff"
      >
        <Text style={styles.subText}>Interested Subjects</Text>
      </TouchableHighlight>

               <TouchableHighlight
        style={styles.submit}
      
        underlayColor="#fff"
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableHighlight>
         </SafeAreaView>
      
    );
};

const styles=StyleSheet.create({
    body:{
          padding:15
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        
      },
      submitText: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#1B3D94",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        fontSize:25
      },
      sub: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        
      },
      subText: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#2d9afe",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        fontSize:22
      },
      complete:{
       color:"black",
       fontSize: 27,
       textAlign:"center",
       marginTop:35
      },
      class:{
      marginTop:40,
      fontSize:20,
      color:"black",
      marginLeft:15
      },
      dob:{
        marginTop:20,
        fontSize:20,
        color:"black",
        marginLeft:15
      },
      school:{
        marginTop:20,
        fontSize:20,
        color:"black",
        marginLeft:15
      },
      state:{
        marginTop:20,
        fontSize:20,
        color:"black",
        marginLeft:15
      },
      city:{
        marginTop:20,
        fontSize:20,
        color:"black",
        marginLeft:15
      },
      enter:{
          marginLeft:14,
          fontSize:19,
         
      }

});