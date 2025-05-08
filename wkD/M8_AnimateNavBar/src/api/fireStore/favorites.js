import {
   doc,
   runTransaction,
   serverTimestamp,
 } from 'firebase/firestore';
 import { db } from "@/api/firebaseConfig";
 
 export async function toggleFavorite({userId, productId}) {
   const globalFavRef = await doc(db, 'favorites', `${userId}_${productId}`);
   const productRef = await doc(db, 'products', productId);
   const userFavRef = await doc(db, 'users', userId, 'favorites', productId);
 
   await runTransaction(db, async (transaction) => {
     const userFavSnap = await transaction.get(userFavRef);
     const productSnap = await transaction.get(productRef);
 
     const currentCount = productSnap.exists()
       ? productSnap.data().favoriteCount || 0
       : 0;
 
     if (userFavSnap.exists()) {
       // 👎 使用者已收藏 → 取消收藏
       transaction.delete(userFavRef);
       transaction.delete(globalFavRef);
       transaction.update(productRef, {
         favoriteCount: Math.max(currentCount - 1, 0),
       });
     } else {
       // 👍 使用者尚未收藏 → 加入收藏
       const now = serverTimestamp();
       transaction.set(userFavRef, {
         productId,
         createdAt: now,
       });
       transaction.set(globalFavRef, {
         userId,
         productId,
         createdAt: now,
       });
       transaction.update(productRef, {
         favoriteCount: currentCount + 1,
       });
     }
   });
 }