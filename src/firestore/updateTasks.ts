import { collection, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../firebase";

export const updateTodos = async (docId: any, todos: any) => {
  const listsRef = doc(firestore, "tasks", docId);

  await updateDoc(listsRef, { tasks: todos })
    //.update({ todos: todos })
    .then(() => console.log("updated doc"))
    .catch((error) => console.log("error could not update doc", error));
};
