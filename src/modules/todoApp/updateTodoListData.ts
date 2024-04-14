//Interfaces
import { ITask, ITodoList, IUpdatedTaskData } from "../../interfaces/ITodoList";

//Storage
import { getTodoList, setTodoList } from "../../storage/getSetTodoList";

//Modules
import showAllTasks from "./showTasks";

const updateTodoListData = (taskID: string, updatedTaskData: IUpdatedTaskData) => {
  const todoListData: ITodoList = getTodoList();
  const { allTasks } = todoListData;

  const newAllTasks: ITask[] = allTasks.map((task: ITask) => {
    if (task.id === taskID) {
      return { ...task, ...updatedTaskData };
    }

    return task;
  });

  const updatedTodoListData: ITodoList = { allTasks: newAllTasks };

  setTodoList(updatedTodoListData);
  showAllTasks();
};

export default updateTodoListData;
