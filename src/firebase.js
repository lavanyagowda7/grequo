import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBdMkzOCYkNM3SOZ7n9b0OU773sQ8newNI",
  authDomain: "grequo-cc156.firebaseapp.com",
  projectId: "grequo-cc156",
  storageBucket: "grequo-cc156.appspot.com",
  messagingSenderId: "805143204167",
  appId: "1:805143204167:web:5a50454ee5be6c88973c62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
