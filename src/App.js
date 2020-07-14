import React,{useEffect,useState} from 'react';
import './App.css';
import Message from './Message.js';
import { Button,FormControl,InputLabel,Input  } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase'
const App = () =>{

  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  
  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  },[])
  useEffect(()=>{
     setUsername(prompt('Please enter your name'))
  }, [] )
  
  const sendmessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return(
    <div className='App'>
      <img src='data:image/png;base64,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' alt=''/>
       <h1> welcome {username} </h1>
       <form>
        <FormControl>
         <InputLabel >Enter a message </InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}/>
         <Button disabled={!input} type='submit' onClick={sendmessage} variant="contained" color="primary">Send Message</Button>
         </FormControl>
       </form>  
    {
         messages.map(({id,message}) =>(
          <Message key={id} username={username} message={message} />
         ))
     }    
    </div>
  );
}

export default App;
