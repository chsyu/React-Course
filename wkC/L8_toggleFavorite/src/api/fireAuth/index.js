import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/api/firebaseConfig";

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ username, email, password }) => {
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

export const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("user");
};
