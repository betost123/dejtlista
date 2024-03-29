import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAUmX--NQ3BWZJvRDmahuP9qugJUVBQKU",
  authDomain: "oskardejt.firebaseapp.com",
  projectId: "oskardejt",
  storageBucket: "oskardejt.appspot.com",
  messagingSenderId: "233325499145",
  appId: "1:233325499145:web:b655ff5cb7d9dc0271b9d8",
  measurementId: "G-NLVDVNY1HQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export var firestore = getFirestore(app);
export const storage = getStorage(app);
