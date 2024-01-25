// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRaB3700nLypECmZra28BaNwfP9BpX5Hg",
  authDomain: "teste-e82ac.firebaseapp.com",
  projectId: "teste-e82ac",
  storageBucket: "teste-e82ac.appspot.com",
  messagingSenderId: "220173128381",
  appId: "1:220173128381:web:75a11caa8c9a78b9be5dd4",
  measurementId: "G-VJZ907Y33G"
};

// Initialize Firebase
console.log( 'Conectado ao Firebase')
const Firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(Firebase)


export { firestore}
