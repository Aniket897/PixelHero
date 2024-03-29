import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
    authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_FIREBASE_PROJECTID}`,
    storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID}`,
    appId: `${import.meta.env.VITE_FIREBASE_APPID}`
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export default app;
