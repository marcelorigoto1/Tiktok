import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBVrZe3l8RKxqVtstGauOF2HP65YR3Sh1s",
  authDomain: "tiktok---jornada-c881f.firebaseapp.com",
  projectId: "tiktok---jornada-c881f",
  storageBucket: "tiktok---jornada-c881f.appspot.com",
  messagingSenderId: "922243640627",
  appId: "1:922243640627:web:c34dfd2c1a797033936246"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;