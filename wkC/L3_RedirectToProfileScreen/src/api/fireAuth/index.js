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
 
 export const getUserInfo = async () => {
  const user = auth?.currentUser || null;

  if(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };    
  } else {
    return {}
  }
}

export const logout = async () => {
  auth.signOut();
}
