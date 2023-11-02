// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // authDomain: import.meta.env.VITE_apiKey,
    // apiKey: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId,
    apiKey: "AIzaSyBCk-G6VUgSN2fhFtr61SGV_9xhivOAycg",
    authDomain: "cars-doctor-4e0aa.firebaseapp.com",
    projectId: "cars-doctor-4e0aa",
    storageBucket: "cars-doctor-4e0aa.appspot.com",
    messagingSenderId: "403708367425",
    appId: "1:403708367425:web:0d3f47c5b299d07ec9ecc0"

};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export default app;