import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
//   take the below from firebase by setting up firebase project
  
  apiKey: 
  authDomain: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: 
};

export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
