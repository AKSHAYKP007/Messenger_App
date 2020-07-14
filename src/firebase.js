import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyB7Qzl85hLKZ6Wz9c-I0RI4J3YkxpgjivM",
  authDomain: "messenger-29863.firebaseapp.com",
  databaseURL: "https://messenger-29863.firebaseio.com",
  projectId: "messenger-29863",
  storageBucket: "messenger-29863.appspot.com",
  messagingSenderId: "975371500490",
  appId: "1:975371500490:web:d8a8d2c0a476b0e11fad33",
  measurementId: "G-JRJ9F45267"
});

const db=firebaseApp.firestore();

export default db;