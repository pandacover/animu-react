import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPrMU41LkkLwVln0ZtBvyO_cHWQ_ez82s",
  authDomain: "animu-fandom.firebaseapp.com",
  databaseURL: "https://animu-fandom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "animu-fandom",
  storageBucket: "animu-fandom.appspot.com",
  messagingSenderId: "352103369914",
  appId: "1:352103369914:web:6755305adf73e2b32f0683",
  measurementId: "G-KGJS17C4FK"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();