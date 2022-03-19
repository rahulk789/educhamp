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
        setMessages(GiftedChat.append(messages,newMessage));
        axios.get(link.concat(newMessage[0]['text'])).then((data)=>{
            console.log(data.data);
            messages.push({
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