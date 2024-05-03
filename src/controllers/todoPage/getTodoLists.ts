//Interfaces
import { TTodoListsData } from "../../interfaces/ITodoList";

//store
import store from "../../model/store";

const getTodoLists = () => {
  const todoLists: TTodoListsData = store.getState().todo;

  return todoLists;
};

export default getTodoLists;
