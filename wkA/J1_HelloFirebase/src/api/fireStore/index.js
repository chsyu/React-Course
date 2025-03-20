import { collection } from "firebase/firestore";
import { db } from "@/api/firebaseConfig";

// REFERENCE COLLECTION
const productsCollection = collection(db, "products"); 
