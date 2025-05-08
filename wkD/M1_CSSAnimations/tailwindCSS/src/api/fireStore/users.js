import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/api/firebaseConfig";

// APIs
export const getUserInfo = async () => {
  const storedUser = localStorage.getItem('user');
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if (user?.uid) {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.exists() ? docSnap.data() : {};

    const favColRef = await collection(db, 'users', user.uid, 'favorites');
    const favSnap = await getDocs(favColRef);
    const favorites = favSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
      favorites, 
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
