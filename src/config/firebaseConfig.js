import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtzVPGdluBGLecVYA0OUwyXaVRnm6igQo",
  authDomain: "todo-list-88efa.firebaseapp.com",
  projectId: "todo-list-88efa",
  storageBucket: "todo-list-88efa.firebasestorage.app",
  messagingSenderId: "762328642403",
  appId: "1:762328642403:web:d88510b9eb5bf2ead79956",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
