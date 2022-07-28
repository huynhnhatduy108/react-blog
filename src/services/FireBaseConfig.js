// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHhPekCgIalKrg3PWv5Mfoi14B1L7IFjs",
  authDomain: "blogapp-320606.firebaseapp.com",
  projectId: "blogapp-320606",
  storageBucket: "blogapp-320606.appspot.com",
  messagingSenderId: "979874640409",
  appId: "1:979874640409:web:e1cd82965ea11d6a35b088",
  measurementId: "G-Q79MMTCLBJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

