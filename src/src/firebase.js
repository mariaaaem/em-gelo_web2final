// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVD3Gmb1eSNxnehEA_xHIR7X-zCUfmsz8",
  authDomain: "em-gelo-web2final.firebaseapp.com",
  projectId: "em-gelo-web2final",
  databaseURL: "http://em-gelo-web2final.firebaseoi.com",
  storageBucket: "em-gelo-web2final.appspot.com",
  messagingSenderId: "503653300281",
  appId: "1:503653300281:web:167856dfcaa200da9a35e8",
  measurementId: "G-HHNDVKZTH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
