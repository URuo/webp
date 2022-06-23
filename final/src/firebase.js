import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBc_CAo_OSFHjBLWIEyuLN30HqfnEy98C8",
  authDomain: "databasefinal-442c0.firebaseapp.com",
  projectId: "databasefinal-442c0",
  storageBucket: "databasefinal-442c0.appspot.com",
  messagingSenderId: "312539723293",
  appId: "1:312539723293:web:5dc5de41489ddf9f7a78f4",
  measurementId: "G-05FR3C457M"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
