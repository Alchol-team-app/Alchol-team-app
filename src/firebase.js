import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjHvsSME-ofTuSFaDQEysF_GaXncATcZw",
  authDomain: "alchol-d021a.firebaseapp.com",
  projectId: "alchol-d021a",
  storageBucket: "alchol-d021a.appspot.com",
  messagingSenderId: "295251255361",
  appId: "1:295251255361:web:fe1bb44b02a95c44e2a6c0",
  measurementId: "G-VTT9HBY5VF",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
