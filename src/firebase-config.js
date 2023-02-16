import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "managetaskapp.firebaseapp.com",
  projectId: "managetaskapp",
  storageBucket: "managetaskapp.appspot.com",
  messagingSenderId: "879621917968",
  appId: "1:879621917968:web:99bba23c2001bb0f0fe995",
  measurementId: "G-ECDY2XBHTN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;
