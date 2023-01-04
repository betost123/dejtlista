import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase";

export const allTasks = async () => {
  const listsCol = collection(firestore, "tasks");
  const listSnapshot = await getDocs(listsCol);
  const lists = listSnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));
  return lists;
};
