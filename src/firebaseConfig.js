// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkbwKtQz2sAfgCgfIHLmseoy_AEO3sZa4",
  authDomain: "klsr-12778.firebaseapp.com",
  projectId: "klsr-12778",
  storageBucket: "klsr-12778.appspot.com",
  messagingSenderId: "348630518883",
  appId: "1:348630518883:web:7b01d6e7ca77d01a3fbc56",
  measurementId: "G-4TK58VJWX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);