import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAucIO7yRfKlVgUMb6IzCa_ylFwCHYjabE",
    authDomain: "project-71-d32af.firebaseapp.com",
    projectId: "project-71-d32af",
    storageBucket: "project-71-d32af.appspot.com",
    messagingSenderId: "916692562906",
    appId: "1:916692562906:web:d611482d938fbbee30c6e3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
