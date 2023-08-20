import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA_72FleUvOBHixiXYSxiiVUg-9DHGWvII",
  authDomain: "netflix-clone-6a995.firebaseapp.com",
  projectId: "netflix-clone-6a995",
  storageBucket: "netflix-clone-6a995.appspot.com",
  messagingSenderId: "468379175177",
  appId: "1:468379175177:web:b12725605f2fe0c2c62bd8",
  measurementId: "G-059WZTSRXJ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);