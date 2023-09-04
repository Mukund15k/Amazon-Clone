// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeFBCc5T-NBftOlsTF9ADHsm8655KU8oA",
  authDomain: "clone-af818.firebaseapp.com",
  projectId: "clone-af818",
  storageBucket: "clone-af818.appspot.com",
  messagingSenderId: "399175561909",
  appId: "1:399175561909:web:4af111ffacea25bd2344fc",
  measurementId: "G-G685KPF004"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };