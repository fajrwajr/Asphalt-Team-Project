import firebase from "firebase";

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPXQ-wq8h0gkr0IU0Kb3EvPZLubfsP4Zo",
  authDomain: "contact-form-4a929.firebaseapp.com",
  projectId: "contact-form-4a929",
  storageBucket: "contact-form-4a929.appspot.com",
  messagingSenderId: "604017542210",
  appId: "1:604017542210:web:69a002b52be12751a999db",
});

let db = firebaseApp.firestore();

export { db };
