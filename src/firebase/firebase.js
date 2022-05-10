
import { initializeApp } from 'firebase/app';
import {
  getFirestore
} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCGPBVyFPlC7sS9DdbUdwU0e__75pz9mIo",
  authDomain: "easywork-290fb.firebaseapp.com",
  databaseURL: "https://easywork-290fb-default-rtdb.firebaseio.com",
  projectId: "easywork-290fb",
  storageBucket: "easywork-290fb.appspot.com",
  messagingSenderId: "24252789061",
  appId: "1:24252789061:web:d1e1683053ddb94ab48e2c",
  measurementId: "G-F5TFVYKDSJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);