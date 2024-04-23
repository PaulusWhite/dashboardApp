//Interfaces
import { ITask, ITodoList, IUpdTodoListsData, IUpdBulletPointData } from "../../interfaces/ITodoList";

//Utils
import getCurrentTodoListIdFromURL from "../../utils/getCurrentTodoListIdFromURL";

//Storage
import { getTodoListDataById, setTodoListData } from "../../storage/getSetTodoList";

//Modules
import showBulletPoints from "./showBulletPoints";

const updTask = (updTaskId: string, updData: IUpdBulletPointData, isRemove: boolean | undefined) => {
  const currenTodoListId: string = getCurrentTodoListIdFromURL();
  const todoList: ITodoList = getTodoListDataById(currenTodoListId) as ITodoList;
  let { allTasks } = todoList;

  allTasks = allTasks.map((task: ITask) => {
    if (task.id === updTaskId) return { ...task, ...updData };

    return task;
  });

  if (isRemove) allTasks = allTasks.filter((task: ITask) => task.id !== updTaskId);

  const updTodoListData: ITodoList = { ...todoList, allTasks };

  setTodoListData(updTodoListData);
  showBulletPoints("task");
};

const updateTodoListsData = (data: IUpdTodoListsData) => {
  // const todoListsData: TMyTodoLists = getMyTodoListsData();

  if (data.updDataType === "task") updTask(data.bulletPointId, data.updData, data.isRemove);
};

export default updateTodoListsData;
