import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    // your config
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();