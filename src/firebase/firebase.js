
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGPBVyFPlC7sS9DdbUdwU0e__75pz9mIo",
  authDomain: "easywork-290fb.firebaseapp.com",
  projectId: "easywork-290fb",
  storageBucket: "easywork-290fb.appspot.com",
  messagingSenderId: "24252789061",
  appId: "1:24252789061:web:d1e1683053ddb94ab48e2c",
  measurementId: "G-F5TFVYKDSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);