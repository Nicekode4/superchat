import React from 'react'

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
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
  
function Signin() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    
    const [ user ] = useAuthState(auth)


    function useSignInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
    }
    
  return (
    <button onClick={useSignInWithGoogle}>Sign in</button>
  )
}

export default Signin