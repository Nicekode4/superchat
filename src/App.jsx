import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useColletionData } from 'react-firebase-hooks/firestore'
import Chatroom from './Componets/Chatroom/Chatroom';
import Signin from './Componets/SignIn/Signin';
import SignOut from './Componets/SignOut/SignOut';

firebase.initializeApp({
  apiKey: "AIzaSyAKLEK4XCu-Tq-KmOHJgpKqLDyr4bmMOnM",
  authDomain: "superchat-abfbd.firebaseapp.com",
  projectId: "superchat-abfbd",
  storageBucket: "superchat-abfbd.appspot.com",
  messagingSenderId: "459728000603",
  appId: "1:459728000603:web:eb9516c6ebfd3ee9e0917e"
})


function App() {
const auth = firebase.auth();
const firestore = firebase.firestore();

const [ user ] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <Chatroom /> : <Signin />}
      </section>

    </div>
  );
}

export default App;
