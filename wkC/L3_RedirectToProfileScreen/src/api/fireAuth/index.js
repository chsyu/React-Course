import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "@/api/firebaseConfig";

export const login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    name,
  });
  return user;
};

export const logout = async () => {
  auth.signOut();
};
