// Firebase কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCZiUeqVof8BsTAuN9JAuqBzEyFS44H4Mo",
  authDomain: "jtq-madrasa.firebaseapp.com",
  projectId: "jtq-madrasa",
  storageBucket: "jtq-madrasa.firebasestorage.app",
  messagingSenderId: "78719198905",
  appId: "1:78719198905:web:57a30b8d1c675cf4b09d68",
  measurementId: "G-ZPYCLWRMT2"
};

// ইনিশিয়ালাইজেশন
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();