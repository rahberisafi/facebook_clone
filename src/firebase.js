import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDbWY3Rc3PQTpLJg2YtpvlpUM7-a3KY_lE",
    authDomain: "facebook-clone-231a3.firebaseapp.com",
    databaseURL: "https://facebook-clone-231a3.firebaseio.com",
    projectId: "facebook-clone-231a3",
    storageBucket: "facebook-clone-231a3.appspot.com",
    messagingSenderId: "361257316243",
    appId: "1:361257316243:web:d506a59f91a35d1c944266",
    measurementId: "G-2E1BP3K2EP"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const userRef = firebaseApp.database().ref("users");

  export const postRef = firebaseApp.database().ref("posts");

  export const storageRef = firebaseApp.storage();
