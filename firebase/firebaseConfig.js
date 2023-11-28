import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8749hwxounLk3k--N36R9085UjkJ9cWg",
    authDomain: "app-food-2fb9b.firebaseapp.com",
    projectId: "app-food-2fb9b",
    storageBucket: "app-food-2fb9b.appspot.com",
    messagingSenderId: "328916531703",
    appId: "1:328916531703:web:7048e399950b1f9db2d6f2",
    measurementId: "G-KJGDDRS1MZ"
};

const app = initializeApp(firebaseConfig);
const authh = getAuth(app)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
