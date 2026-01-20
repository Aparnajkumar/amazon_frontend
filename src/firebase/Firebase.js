import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyC8uNjfh4oiv6xXJUzL_NnQuguIPSE1V7U",
    authDomain: "login-3d2da.firebaseapp.com",
    projectId: "login-3d2da",
    storageBucket: "login-3d2da.firebasestorage.app",
    messagingSenderId: "356086759342",
    appId: "1:356086759342:web:8f2bb8ad1d8c3acfae123f",
    measurementId: "G-405YBCJ3NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





// Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

