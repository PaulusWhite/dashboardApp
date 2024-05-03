//store
import store from "../../model/store";

//Interfaces
import { ITodoListData } from "../../interfaces/ITodoList";

const getTodoListDataByID = (todoListID: string): ITodoListData | undefined => {
  const todoListsData = store.getState().todo;
  const todoListData: ITodoListData | undefined = todoListsData.find((todoListData: ITodoListData) => todoListData.id === todoListID);

  return todoListData;
};

export default getTodoListDataByID;
