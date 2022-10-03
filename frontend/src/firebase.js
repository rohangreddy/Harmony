import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7-zHQCsgX8-bOtrbxxEblE3KsRW7KKNM",
    authDomain: "harmony-95997.firebaseapp.com",
    projectId: "harmony-95997",
    storageBucket: "harmony-95997.appspot.com",
    messagingSenderId: "27980282823",
    appId: "1:27980282823:web:1228a6f131df514d0777e2",
    measurementId: "G-ZSM49WTHY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
