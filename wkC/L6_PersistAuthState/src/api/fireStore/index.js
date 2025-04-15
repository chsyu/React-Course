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
import { db, auth } from "@/api/firebaseConfig";
// import products from "@/json/products.json";

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

export const getProducts = async () => {
  let querySnapshot = await getDocs(productsCollection);

  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
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


export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;
  if (user?.uid) {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };
  } else {
    return {};
  }
};

export const updateUserInfo = async ({ username, adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    username,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};
 