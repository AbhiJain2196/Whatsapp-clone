import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoksFVxaV2Pp38ylnuH3BVz4SdhHZXDsY",
  authDomain: "whatsapp-clone-f7f85.firebaseapp.com",
  projectId: "whatsapp-clone-f7f85",
  storageBucket: "whatsapp-clone-f7f85.appspot.com",
  messagingSenderId: "63158336195",
  appId: "1:63158336195:web:caf1ace1846f7b6a5d4076",
  measurementId: "G-SW4DE993CM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
