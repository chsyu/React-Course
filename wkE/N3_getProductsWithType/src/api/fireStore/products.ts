import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/api/firebaseConfig";
import type { Product } from "@/types";
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
  products.forEach(async (product:Product) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
  });
};

export const getProducts = async ():Promise<Product[]> => {
  let querySnapshot = await getDocs(productsCollection);

  // Convert the query to a json array.
  let result:Product[] = [];
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    result.push(product as Product);
  });
  return result;
};

export const getProductById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    productsCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
  });
  return result;
};

 