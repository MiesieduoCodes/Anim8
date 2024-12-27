import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKE0dQ32aXLOBfSwAFazOWxfMWQznaTmY",
  authDomain: "paymentslip-90abf.firebaseapp.com",
  projectId: "paymentslip-90abf",
  storageBucket: "paymentslip-90abf.appspot.com",
  messagingSenderId: "39407549314",
  appId: "1:39407549314:web:3edd3d343be9e8bcff2d9b",
  measurementId: "G-XJ4L5H9QLD",
};

// Check if Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
