// FireBase.jsx
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLujNodMK2U8xKpptSV1qgki16UfL9Ek",
  authDomain: "anim8-af956.firebaseapp.com",
  projectId: "anim8-af956",
  storageBucket: "anim8-af956.firebasestorage.app",
  messagingSenderId: "321866166518",
  appId: "1:321866166518:web:2ec420f430299ee3223cd7",
  measurementId: "G-ZCDM9Q7QMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Log a custom event to Firebase Analytics
logEvent(analytics, "app_loaded", { platform: "web" });

// Named exports
export { app, analytics };