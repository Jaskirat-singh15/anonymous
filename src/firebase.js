// import firebase from "firebase/app";   older version 8

// new version 9
import firebase from 'firebase/compat/app';

// import "firebase/firestore"; previous version

// new version 9 with compat
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvshAN4qkbdRGCIC8UqUs14DB4iz4Yhys",
    authDomain: "anonymous-twitter-clone.firebaseapp.com",
    projectId: "anonymous-twitter-clone",
    storageBucket: "anonymous-twitter-clone.appspot.com",
    messagingSenderId: "199122177237",
    appId: "1:199122177237:web:973d1a6925cd6b392f665c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   export const firestore = firebase.firestore(); previous version
     
     export const firestore = getFirestore();

  export default firebase;