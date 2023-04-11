import React from 'react'
import '../../App.css';
import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAKLEK4XCu-Tq-KmOHJgpKqLDyr4bmMOnM",
    authDomain: "superchat-abfbd.firebaseapp.com",
    projectId: "superchat-abfbd",
    storageBucket: "superchat-abfbd.appspot.com",
    messagingSenderId: "459728000603",
    appId: "1:459728000603:web:eb9516c6ebfd3ee9e0917e"
  })
  
    
function SignOut() {
    const auth = firebase.auth();
  return (
    <button onClick={() => auth.signOut()}>Sign out</button>
  )
}

export default SignOut