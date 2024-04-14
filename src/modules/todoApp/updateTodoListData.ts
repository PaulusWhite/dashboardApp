//Interfaces
import { ITask, ITodoList, IUpdatedTaskData } from "../../interfaces/ITodoList";

//Storage
import { getTodoList, setTodoList } from "../../storage/getSetTodoList";

//Modules
import showTasks from "./showTasks";

const updateTodoListData = (taskID: string, updatedTaskData: IUpdatedTaskData, isRemove?: boolean) => {
  const todoListData: ITodoList = getTodoList();
  const { allTasks } = todoListData;

  let newAllTasks: ITask[] = allTasks.map((task: ITask) => {
    if (task.id === taskID) {
      return { ...task, ...updatedTaskData };
    }

    return task;
  });

  if (isRemove) newAllTasks = newAllTasks.filter((task: ITask) => task.id !== taskID);

  const updatedTodoListData: ITodoList = { allTasks: newAllTasks };

  setTodoList(updatedTodoListData);
  showTasks();
};

export default updateTodoListData;
