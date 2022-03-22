import React, {createContext,  useState} from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [code, setCode] = useState('');
    
    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            name, 
            setName,
            email,
            setEmail,
            code,
            setCode,
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
                await auth().createUserWithEmailAndPassword(email,password)
                    .then(()=>{
                        console.log(email)
                        console.log(password)
                    //     firestore().collection('users').doc(auth().currentUser.uid)
                    //     .set({
                    //       name: name,
                    //       email: email,
                    //       grade: grade,
                    //       dob: dob,
                    //       school : school,
                    //       state: state,
                    //       city: city,
                    //       selected : selected,
                    //       createdAt: firestore.Timestamp.fromDate(new Date()),
                    //       userImg: null,
                    //   })
                    })
            },
            logout: async() =>{
                try{
                    await auth().signOut();
                } catch(e){
                    console.log(e);
                }
            },
            google: async() =>{
                const { idToken } = await GoogleSignin.signIn();
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                auth().signInWithCredential(googleCredential);
            },
            phone: async(phoneNumber) =>{
                await auth().signInWithPhoneNumber(phoneNumber);
            },
            otp: async() => {
                await confirm.confirm(code);
            },
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )
}


