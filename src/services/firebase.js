// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGErI4MZtQeqcBuvYmGVTRogwzLEwoLdQ",
  authDomain: "react-34880-414a0.firebaseapp.com",
  projectId: "react-34880-414a0",
  storageBucket: "react-34880-414a0.appspot.com",
  messagingSenderId: "360192773192",
  appId: "1:360192773192:web:120982a1bf88f6b3681c7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
