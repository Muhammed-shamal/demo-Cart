// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgokopPqYd3XnNy6rLWjROt2Z5CiSfMgM",
  authDomain: "e-commerce-demo-cart.firebaseapp.com",
  projectId: "e-commerce-demo-cart",
  storageBucket: "e-commerce-demo-cart.appspot.com",
  messagingSenderId: "892970315399",
  appId: "1:892970315399:web:40f54ba5d8e82b9fd2d222",
  measurementId: "G-7DP3210PEP",
};

export default firebase.initializeApp(firebaseConfig);
//export const Firebase = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
