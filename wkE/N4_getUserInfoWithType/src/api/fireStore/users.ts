import { doc, getDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import { db, auth } from "@/api/firebaseConfig";
import type { UserDoc, FavoriteDoc, UserInfo, UpdateUserInfoParams } from "@/types"; 

// APIs
export const getUserInfo = async (): Promise<UserInfo | {}> => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || (storedUser ? JSON.parse(storedUser) : null);

  if (user?.uid) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.exists() ? (docSnap.data() as UserDoc) : {};

    const favColRef = collection(db, "users", user.uid, "favorites");
    const favSnap = await getDocs(favColRef);
    const favorites: FavoriteDoc[] = favSnap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<FavoriteDoc, "id">),
    }));

    const userInfo: UserInfo = {
      uid: user.uid,
      email: user.email ?? null,
      ...userDoc,
      favorites,
    };

    return userInfo;
  } else {
    return {};
  }
};

export const updateUserInfo = async ({
  username,
  adrs,
  tel,
  uid,
}: UpdateUserInfoParams): Promise<void> => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    username,
    adrs,
    tel,
  });

  const user = auth.currentUser;
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
