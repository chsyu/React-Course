import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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


export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

export const createGroceryList = (userName, userId) => {
  return db.collection('groceryLists')
     .add({
        created: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: userId,
        users: [{
           userId: userId,
           name: userName
        }]
     });
};

export const getGroceryList = groceryListId => {
  return db.collection('groceryLists')
     .doc(groceryListId)
     .get();
};

export const getGroceryListItems = groceryListId => {
  return db.collection('groceryLists')
     .doc(groceryListId)
     .collection('items')
     .get();
}

export const streamGroceryListItems = (groceryListId, observer) => {
  return db.collection('groceryLists')
     .doc(groceryListId)
     .collection('items')
     .orderBy('created')
     .onSnapshot(observer);
};

export const addUserToGroceryList = (userName, groceryListId, userId) => {
  return db.collection('groceryLists')
     .doc(groceryListId)
     .update({
        users: firebase.firestore.FieldValue.arrayUnion({
           userId: userId,
           name: userName
        })
     });
};

export const addGroceryListItem = (item, groceryListId, userId) => {
  return getGroceryListItems(groceryListId)
     .then(querySnapshot => querySnapshot.docs)
     .then(groceryListItems => groceryListItems.find(groceryListItem => groceryListItem.data().name.toLowerCase() === item.toLowerCase()))
     .then(matchingItem => {
        if (!matchingItem) {
           return db.collection('groceryLists')
              .doc(groceryListId)
              .collection('items')
              .add({
                 name: item,
                 created: firebase.firestore.FieldValue.serverTimestamp(),
                 createdBy: userId
              });
        }
        throw new Error('duplicate-item-error');
     });
};