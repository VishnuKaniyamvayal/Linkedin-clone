import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBm_h3_-PREdI43jNloU7W2d5jKpFWt2Jo",
    authDomain: "linkedin-clone-c2f74.firebaseapp.com",
    projectId: "linkedin-clone-c2f74",
    storageBucket: "linkedin-clone-c2f74.appspot.com",
    messagingSenderId: "788802856571",
    appId: "1:788802856571:web:56009efa16ca8c3d2c64de",
    measurementId: "G-999PZ7QBV5"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()


export {db, auth}
   