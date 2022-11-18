import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRK7oRCTXIrLMsHPC0k1GoWDTCYu80hSo",
  authDomain: "react-portfolio-dashboar-34507.firebaseapp.com",
  projectId: "react-portfolio-dashboar-34507",
  storageBucket: "react-portfolio-dashboar-34507.appspot.com",
  messagingSenderId: "852045074357",
  appId: "1:852045074357:web:9e7c3dce8c0a472b3813fc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
