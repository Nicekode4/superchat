import React from 'react'
import '../../App.css';
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

function Chatmessage(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    
    const [ user ] = useAuthState(auth)
const {text, uid, photoURL } = props.message;

const messageClass = uid === auth.currentUser.uid ? 'sent' : 'reciaved';
  return (
    <>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>
  )
}

export default Chatmessage