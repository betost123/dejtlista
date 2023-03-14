import { collection, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../firebase";

export const updateRestaurants = async (docId: any, todos: any) => {
  const listsRef = doc(firestore, "restaurants", docId);

  await updateDoc(listsRef, { tasks: todos })
    .then(() => console.log("updated doc"))
    .catch((error) => console.log("error could not update doc", error));
};
