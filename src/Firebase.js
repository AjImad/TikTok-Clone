import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmkawrq3UxUS7m8N3ioQQtJsB7wvb6b8w",
    authDomain: "tic-tok-96018.firebaseapp.com",
    projectId: "tic-tok-96018",
    storageBucket: "tic-tok-96018.appspot.com",
    messagingSenderId: "368795081776",
    appId: "1:368795081776:web:e1a2fa723c999e02d261f5",
    measurementId: "G-YS4ZZ2WWSB"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  
  const db = getFireStore(firebaseApp);