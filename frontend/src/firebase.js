import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC77-CFdFRawXid-CIvPfKLS1fF3k7jnwQ",
  authDomain: "whatsapp-e69e0.firebaseapp.com",
  projectId: "whatsapp-e69e0",
  storageBucket: "whatsapp-e69e0.appspot.com",
  messagingSenderId: "510222853516",
  appId: "1:510222853516:web:1b05132bded71482cbe2a9",
  measurementId: "G-DT8DT8JK0F"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);