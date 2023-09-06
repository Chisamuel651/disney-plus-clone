import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD-GnOBG9LeK4WTJsmtI34Hn7Tg2-5kVyc",
  authDomain: "disneyplus-clone-d1e13.firebaseapp.com",
  projectId: "disneyplus-clone-d1e13",
  storageBucket: "disneyplus-clone-d1e13.appspot.com",
  messagingSenderId: "29881477095",
  appId: "1:29881477095:web:2f3b080095f1df4eb43f42",
  measurementId: "G-HMLDD7X5HS",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
