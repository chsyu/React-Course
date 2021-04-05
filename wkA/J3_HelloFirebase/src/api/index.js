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
  apiKey: "AIzaSyDUH6vOCALEXSjYHgv8P9d2y3tKklE44qA",
  authDomain: "f2e2020-bd468.firebaseapp.com",
  databaseURL: "https://f2e2020-bd468.firebaseio.com",
  projectId: "f2e2020-bd468",
  storageBucket: "f2e2020-bd468.appspot.com",
  messagingSenderId: "832044128799",
  appId: "1:832044128799:web:5dedad46efcd2c3253932a",
  measurementId: "G-QWW610MX3Z"
};

firebase.initializeApp(firebaseConfig);

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

export const postChatContent = (senderName, message) => {
  // REFERENCE CHATROOM DOCUMENT
  let chatroomDocRef = firebase.firestore()
    .collection("chatrooms")
    .doc("chatroom2");
  // REFERENCE CHATROOM MESSAGES
  let messagesCollectionRef = chatroomDocRef.collection("messages");
  messagesCollectionRef.add({
    senderName,
    message,
    timeStamp: Date.now(),
  });
}

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};
