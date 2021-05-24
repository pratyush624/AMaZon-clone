// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB54ywpE7mTLVOkxfh6e64xSf-BOSSI7BY",
    authDomain: "clone-app-587b7.firebaseapp.com",
    projectId: "clone-app-587b7",
    storageBucket: "clone-app-587b7.appspot.com",
    messagingSenderId: "989848829772",
    appId: "1:989848829772:web:f537d63902d6e83a5d59e9",
    measurementId: "G-GKM6SZVCKS"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()

  export default db