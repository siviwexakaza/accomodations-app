import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBl4J-C6XbLZMEQwrtSnxtRVniRBN2N6T4",
  authDomain: "studentprime-aa0f6.firebaseapp.com",
  projectId: "studentprime-aa0f6",
  storageBucket: "studentprime-aa0f6.appspot.com",
  messagingSenderId: "564745653714",
  appId: "1:564745653714:web:a0bd7b0ca3014e2ae70c0b"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth()