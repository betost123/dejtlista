import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase";

export const allRestaurants = async () => {
  const listsCol = collection(firestore, "restaurants");
  const listSnapshot = await getDocs(listsCol);
  const lists = listSnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));
  return lists;
};
