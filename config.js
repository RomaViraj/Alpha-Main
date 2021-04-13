import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCpHJ45J-eUfMdYXbX2XB22usOol3PVSw8",
    authDomain: "alpha-c0422.firebaseapp.com",
    databaseURL: "https://alpha-c0422.firebaseio.com",
    projectId: "alpha-c0422",
    storageBucket: "alpha-c0422.appspot.com",
    messagingSenderId: "762563995454",
    appId: "1:762563995454:web:2ecf75211868ab8221ee6f"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()