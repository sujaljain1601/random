// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Todo add firebase Config object here
const firebaseConfig = {
  apiKey: "asas",
  authDomain: "asa",
  projectId: "asa1",
  storageBucket: "sdsd",
  messagingSenderId: "sdsd",
  appId: "1:sd:web:sd",
  measurementId: "G-sds",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();

export { auth, firebase };
