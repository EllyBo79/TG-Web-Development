import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyCGxCfkE3A2iNkUgMNx2b9IDtJQybW_V1U",
  authDomain: "fir-smelly-cat.firebaseapp.com",
  projectId: "fir-smelly-cat",
  storageBucket: "fir-smelly-cat.appspot.com",
  messagingSenderId: "509727354085",
  appId: "1:509727354085:web:e24da55510062a0867780c",
  measurementId: "G-ZNNS0J0DQW"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
  
  
 