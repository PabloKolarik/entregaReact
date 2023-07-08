import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLzld6cV218xQcHTJKYleBmfRuh1bJE-o",
  authDomain: "entrega-react-7c14e.firebaseapp.com",
  projectId: "entrega-react-7c14e",
  storageBucket: "entrega-react-7c14e.appspot.com",
  messagingSenderId: "279370475760",
  appId: "1:279370475760:web:ed8d7b39e1e3616b193a35"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)