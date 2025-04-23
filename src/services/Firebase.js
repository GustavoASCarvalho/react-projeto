import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyB0KnMeUajaxO_eS9-2wuBY-KhBZFMqUNs",
    authDomain: "teste-puc.firebaseapp.com",
    projectId: "teste-puc",
    storageBucket: "teste-puc.firebasestorage.app",
    messagingSenderId: "847649161281",
    appId: "1:847649161281:web:ddba53c80d71e4553f06c0",
    measurementId: "G-PS441GX8JG"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;