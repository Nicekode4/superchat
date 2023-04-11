import React, { useRef, useState } from 'react'
import '../../App.css';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Chatmessage from '../Chatmessage/Chatmessage';

import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAKLEK4XCu-Tq-KmOHJgpKqLDyr4bmMOnM",
    authDomain: "superchat-abfbd.firebaseapp.com",
    projectId: "superchat-abfbd",
    storageBucket: "superchat-abfbd.appspot.com",
    messagingSenderId: "459728000603",
    appId: "1:459728000603:web:eb9516c6ebfd3ee9e0917e"
  })
  
function Chatroom() {
    const dummy = useRef();
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    
    const [ user ] = useAuthState(auth)

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' })

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
        <main>
    
          {messages && messages.map(msg => <Chatmessage key={msg.id} message={msg} />)}
    
          <span ref={dummy}></span>
    
        </main>
    
        <form onSubmit={sendMessage}>
    
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
    
          <button type="submit" disabled={!formValue}>🕊️</button>
    
        </form>
      </>
  )
}

export default Chatroom