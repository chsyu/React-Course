import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfoProducts from "../json/jsonInfoProducts.json"
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getJSON = (url) => {
  switch (url) {
    case "/":
      return products;
    case "/textile":
      return textile;
    case "/tableware":
      return tableware;
    case "/lighting":
      return lighting;
    case "/cookware":
      return cookware;
    case "/furniture":
      return furniture;
    case "/home-accessories":
      return homeAccessories;
    default:
      return products;
  }
};

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "AllProducts";
  let jsonProducts = [];
  // REFERENCE PRODUCTS DOCUMENT
  const productsCollectionRef = firebase.firestore()
    .collection("products");
  const productsDocRef = productsCollectionRef.doc("json");
  // REFERENCE PRODUCTS COLLECTION
  const categorizedCollectionRef = await productsDocRef.collection(`${collectionName}`);
  const querySnapshot = await categorizedCollectionRef.get();

  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });

  return jsonProducts;
}

export const feedProducts = (name, products) => {
  // REFERENCE PRODUCTS DOCUMENT
  const productsCollectionRef = firebase.firestore()
    .collection("products");
  const productsDocRef = productsCollectionRef.doc("json");
  // REFERENCE PRODUCTS COLLECTION
  const categorizedCollectionRef = productsDocRef.collection(`${name}`);
  const allProductsCollectionRef = productsDocRef.collection('AllProducts')
  products.forEach((product) => {
    const docRef = categorizedCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
    allProductsCollectionRef.add({
      ...product,
      id,
    })
  })
}

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};


