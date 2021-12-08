import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyBBD8YOe1lqbOKRQzrzbxqWkZ0akMHOc8c",
    authDomain: "netflix-main-b20c9.firebaseapp.com",
    projectId: "netflix-main-b20c9",
    storageBucket: "netflix-main-b20c9.appspot.com",
    messagingSenderId: "285151813608",
    appId: "1:285151813608:web:6bd631791fd3bb18a2ce5d"
  };

const firebase = Firebase.initializeApp(config);


export { firebase };
