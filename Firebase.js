import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAtBSATR2XWjLaKM2z6bhHuIfFMfg3iEEk",
    authDomain: "lakdighanaproject.firebaseapp.com",
    projectId: "lakdighanaproject",
    storageBucket: "lakdighanaproject.appspot.com",
    messagingSenderId: "988626260159",
    appId: "1:988626260159:web:144fd61fcf23f6d790360a"
};

const app = initializeApp(firebaseConfig);
 const authentication = getAuth(app)
 const database = getFirestore()

export {authentication,database}