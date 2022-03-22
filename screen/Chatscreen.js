import React, {useState} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios'
export default function Chatscreen () {
    const[link,setLink] = useState('https://educhamp-api.herokuapp.com/')
    const[messages,setMessages] = useState([
        {
            _id: 0,
            text: 'New room created.',
            createdAt: new Date(). getTime(),
            system: true
        },
        {
            _id: 1,
            text: 'Hello!\nHow can I help you',
            createdAt: new Date().getTime(),
            user:{
                _id: 2,
                name: 'Bot',

            }
        }
    ]);
    function handleSend(newMessage=[]){
<<<<<<< HEAD
        messages.unshift(newMessage)
        axios.get(link.concat(newMessage[0]['text'])).then((data)=>{
            console.log(data.data);
            setMessages(GiftedChat.append(messages,newMessage));
            messages.unshift({
=======
        setMessages(GiftedChat.append(messages,newMessage));
        axios.get(link.concat(newMessage[0]['text'])).then((data)=>{
            console.log(data.data);
            messages.push({
>>>>>>> cd0e2ec198fcc73147c86f0c48cf17c18ffdba4e
                _id: 2,
            text: data.data,
            createdAt: new Date().getTime(),
            user:{
                _id: 2,
                name: 'Bot',
            }
            })
            setMessages(messages)
        })
        
    }
    return(
        <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{_id:1}}
        />
    );
}