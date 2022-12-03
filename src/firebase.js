// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZFpoVtEQ4wetz-3kP7SQixbr6aXasze8",
  authDomain: "smsapp-880bf.firebaseapp.com",
  projectId: "smsapp-880bf",
  storageBucket: "smsapp-880bf.appspot.com",
  messagingSenderId: "419066010625",
  appId: "1:419066010625:web:ddd9f8f132c1ad97183400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
