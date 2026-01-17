// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwtonVIyUTd9uf_DmTvsXLe8Azkrk0Gx8",
  authDomain: "publicpreference-5856f.firebaseapp.com",
  projectId: "publicpreference-5856f",
  storageBucket: "publicpreference-5856f.firebasestorage.app",
  messagingSenderId: "569420096911",
  appId: "1:569420096911:web:0f7484bd91fd4a87c297fa",
  measurementId: "G-JCCLZP9PNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);