// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaT6ssS8NE9nagt6N3_w5pfPzdouG0n_4",
  authDomain: "movie-app-bbd2e.firebaseapp.com",
  projectId: "movie-app-bbd2e",
  storageBucket: "movie-app-bbd2e.firebasestorage.app",
  messagingSenderId: "114313919623",
  appId: "1:114313919623:web:26b551675be9c44aaf0c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
