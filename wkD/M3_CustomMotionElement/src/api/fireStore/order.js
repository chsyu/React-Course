import { db } from "@/api/firebaseConfig";
import {
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";

export async function createOrder({ userId, data }) {
  try {
    const userOrderRef = doc(collection(db, "users", userId, "orders"));
    const orderId = userOrderRef.id;

    const orderData = {
      ...data,
      userId,
      orderId,
      createdAt: new Date().toISOString(),
    };

    const batch = writeBatch(db);
    batch.set(userOrderRef, orderData);
    batch.set(doc(db, "orders", orderId), orderData);

    await batch.commit();
    return { orderData };
  } catch (error) {
    console.error("Create order failed:", error);
    throw error;
  }
}
