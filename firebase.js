import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB4M7VBhCp9yZxuHGtWleH6EHzhc-lhdWo",
  authDomain: "fir-affe4.firebaseapp.com",
  projectId: "fir-affe4",
  storageBucket: "fir-affe4.appspot.com",
  messagingSenderId: "342102755552",
  appId: "1:342102755552:web:27eece0524342b5c55a885",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
