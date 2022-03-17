import React, {Children,createContext, useState} from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            name, 
            setName,
            email,
            setEmail,
            password,
            setPassword,
            login: async (email,password) => {
                try{
                    await auth().signInWithEmailAndPassword(email,password)
                }catch(e){
                    console.log(e);
                }
            },
            register: async (grade,dob,school,state,city,selected) =>{
                try{
                    await auth().createUserWithEmailAndPassword(email,password)
                    .then(()=>{

                        firestore().collection('users').doc(auth().currentUser.uid)
                      .set({
                          name: name,
                          email: email,
                          grade: grade,
                          dob: dob,
                          school : school,
                          state: state,
                          city: city,
                          selected : selected,
                          createdAt: firestore.Timestamp.fromDate(new Date()),
                          userImg: null,
                      })
                      //ensure we catch any errors at this stage to advise us if something does go wrong
                      .catch(error => {
                          console.log('Something went wrong with added user to firestore: ', error);
                      })
                    })
                } catch(e){
                    console.log(e);
                }
            },
            logout: async() =>{
                try{
                    await auth().signOut();
                } catch(e){
                    console.log(e);
                }
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}


