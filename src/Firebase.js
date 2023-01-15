import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHTPSgdvRF-Gj9bQEM0KyjBezmYO4YuEg",
  authDomain: "linkedin-9671d.firebaseapp.com",
  projectId: "linkedin-9671d",
  storageBucket: "linkedin-9671d.appspot.com",
  messagingSenderId: "410562361035",
  appId: "1:410562361035:web:107321d90dadfff2864d4e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.firestore.auth();

export { db, auth };
