import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_98R03WLrtKh7F9XwBV0h-o-jnmM9Ux4",
  authDomain: "e-commerce-db-33f57.firebaseapp.com",
  databaseURL: "https://e-commerce-db-33f57.firebaseio.com",
  projectId: "e-commerce-db-33f57",
  storageBucket: "",
  messagingSenderId: "257008898356",
  appId: "1:257008898356:web:b8463dcba3c578a2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
