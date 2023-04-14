import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chatverse-c2389.firebaseapp.com",
  projectId: "chatverse-c2389",
  storageBucket: "chatverse-c2389.appspot.com",
  messagingSenderId: "479989862151",
  appId: "1:479989862151:web:56e011bc6d173abb567fa2"
};

export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
