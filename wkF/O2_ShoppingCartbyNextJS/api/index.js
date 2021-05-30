import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDUH6vOCALEXSjYHgv8P9d2y3tKklE44qA",
  authDomain: "f2e2020-bd468.firebaseapp.com",
  databaseURL: "https://f2e2020-bd468.firebaseio.com",
  projectId: "f2e2020-bd468",
  storageBucket: "f2e2020-bd468.appspot.com",
  messagingSenderId: "832044128799",
  appId: "1:832044128799:web:5dedad46efcd2c3253932a",
  measurementId: "G-QWW610MX3Z"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
// REFERENCE PRODUCTS
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");

//REFERENCE AUTH
const auth = firebase.auth();

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      user,
      id
    });
  })
}

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}

export const createOrderApi = async (order) => {
  const user = auth.currentUser.uid;
  const orderRef = await allOrdersCollectionRef.doc();
  const id = orderRef.id;
  // Store Data for Aggregation Queries
  await orderRef.set({
    ...order,
    id,
    user
  });
  return { ...order, id };
}

export const getOrderById = async (orderId) => {
  const doc = await allOrdersCollectionRef.doc(orderId).get();
  return doc.data()
}

export const getOrderByUser = async () => {
  const user = auth.currentUser.uid;
  let jsonOrders = [];

  // QUERY Orders
  const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
  querySnapshot.forEach((doc) => {
    jsonOrders.push(doc.data());
  });
  return jsonOrders;
}

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  if(!user) return false;
  return user.uid?  true : false;
}

