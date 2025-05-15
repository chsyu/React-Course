import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/api/firebaseConfig";
import type { LoginInput, RegisterInput } from "@/types";

export const login = async ({ email, password }: LoginInput) => {
  await signInWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ username, email, password }: RegisterInput) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  localStorage.setItem("user", JSON.stringify(user));
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    username,
  });
};

export const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("user");
};
