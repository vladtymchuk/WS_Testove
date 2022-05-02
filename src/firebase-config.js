import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAPrJ4JKatwHQr0rgTedGDA3BlqYsJQgfk",
    authDomain: "testtt-4f824.firebaseapp.com",
    projectId: "testtt-4f824",
    storageBucket: "testtt-4f824.appspot.com",
    messagingSenderId: "400116186459",
    appId: "1:400116186459:web:c3484315db8661a4c2ee7e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)