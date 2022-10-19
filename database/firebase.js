import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZZGPgJFbqtmsYb39ZJiY9Oi1RqhF7wZY",
    authDomain: "projetorn-3a6c4.firebaseapp.com",
    projectId: "projetorn-3a6c4",
    storageBucket: "projetorn-3a6c4.appspot.com",
    messagingSenderId: "133718959243",
    appId: "1:133718959243:web:c67f6f65f18f69197fa08e"
  };

firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default {
    firebase,
    db,
}