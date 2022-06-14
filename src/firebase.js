// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADYK-9qGCx6fdJPGS6Y0B_wRw9TOK7Zk4",
  authDomain: "mentostark-31331.firebaseapp.com",
  projectId: "mentostark-31331",
  storageBucket: "mentostark-31331.appspot.com",
  messagingSenderId: "387270232884",
  appId: "1:387270232884:web:7e8a287bc343a950b5b361",
  measurementId: "G-N27GH4EDRF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();

export { auth, firebase };
