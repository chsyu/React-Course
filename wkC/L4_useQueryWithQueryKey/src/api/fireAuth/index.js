import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/api/firebaseConfig";

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const register = async ({ username, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    username,
  });
};

export const logout = async () => {
  auth.signOut();
};
