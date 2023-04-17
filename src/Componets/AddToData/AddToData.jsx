
import React, { Suspense, useEffect, useState } from "react";

import { onValue, ref } from "firebase/database";
import firebase from 'firebase/compat/app'; 
     import 'firebase/compat/firestore';
     import 'firebase/compat/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAKLEK4XCu-Tq-KmOHJgpKqLDyr4bmMOnM",
    authDomain: "https://superchat-abfbd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "superchat-abfbd",
    storageBucket: "superchat-abfbd.appspot.com",
    messagingSenderId: "459728000603",
    appId: "1:459728000603:web:eb9516c6ebfd3ee9e0917e"
};

firebase.initializeApp(firebaseConfig);
const db = getDatabase();
function AddToData() {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        });
      }
    });
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        console.log(project)
      ))}
    </div>
  );
}

export default AddToData