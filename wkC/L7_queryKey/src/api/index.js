import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  initializeFirestore,
} from "firebase/firestore";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
} from 'firebase/auth';
import products from "../json/products.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = app_length ? getFirestore(app) : initializeFirestore(app, { experimentalForceLongPolling: true, });

// REFERENCE AUTH
const auth = app_length ? getAuth(app) : initializeAuth(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");
const usersCollection = collection(db, "users");

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "products", product.id));
  });
  // ADD NEW DOCS
  products.forEach(async (product) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, {
      ...product,
      id: docRef.id,
      category: product.category.toUpperCase(),
    });
  });
};

export const toggleFavoriteProduct = async (productId, uid) => {
  const docRef = await doc(db, "users", uid);
  const favoritesCollection = await collection(docRef, "favorites");
  await addDoc(favoritesCollection, { 
    productId,
   });
}

export const getProducts = async () => {
  let querySnapshot = await getDocs(productsCollection);

  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (product) => {
    await result.push(product.data());
  });
  console.log({ result });
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
  if(auth.currentUser) {
    const user = auth.currentUser
    const docRef = await doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();

    return {
      accessToken: user.accessToken,
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };    
  } else {
    return {}
  }

}

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = auth.currentUser;
  const docRef = await doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();

  return {
    accessToken: user.accessToken,
    uid: user.uid,
    email: user.email,
    ...userDoc,
  };
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;

  const docRef = await doc(db, "users", auth.currentUser.uid);
  await setDoc(docRef, {
    name,
  });
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();
  return {
    accessToken: user.accessToken,
    uid: user.uid,
    email: user.email,
    ...userDoc,
  };
};

export const updateUserInfo = async ({ name, adrs, tel, uid }) => {
  const docRef = await doc(db, "users", uid);
  await updateDoc(docRef, {
    name,
    adrs,
    tel,
  });
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export const logout = async () => {
  await auth.signOut();
}

