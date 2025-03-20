import { collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "@/api/firebaseConfig";
import products from "@/json/products.json";

// REFERENCE COLLECTION
const productsCollection = collection(db, "products"); 

// APIs
export const feedProducts = async () => {
   // DELETE ALL EXISTING DOCS
   const querySnapshot = await getDocs(productsCollection);
   querySnapshot.forEach(async (product) => {
     await deleteDoc(doc(db, "products", product.id));
   });
   // ADD NEW DOCS
   products.forEach(async (product) => {
     const docRef = await doc(productsCollection);
     await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
   });
 };
 