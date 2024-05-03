//store
import store from "../../model/store";

//Actions
import { createUpdTodoListAction, createUpdTodoListsAction } from "../../model/actionCreators";

//Interfaces
import { IUpdTodoListsData, IUpdBulletPointData, ITaskData, ITodoListData } from "../../interfaces/ITodoList";

//Utils
import getCurrentTodoListIdFromURL from "../../utils/getCurrentTodoListIdFromURL";

//Modules
import showBulletPoints from "../../modules/todoApp/showBulletPoints";

//controllers
import getTodoListDataByID from "./getTodoListDataByID";

const updTask = (updTaskId: string, updData: IUpdBulletPointData, isRemove: boolean | undefined): void => {
  const currenTodoListId: string = getCurrentTodoListIdFromURL();
  const todoList: ITodoListData = getTodoListDataByID(currenTodoListId) as ITodoListData;
  let { allTasks } = todoList;

  allTasks = allTasks.map((task: ITaskData) => (task.id === updTaskId ? { ...task, ...updData } : task));

  if (isRemove) allTasks = allTasks.filter((task: ITaskData) => task.id !== updTaskId);

  const updatedTodoListData: ITodoListData = { ...todoList, allTasks };

  store.dispatch(createUpdTodoListAction(updatedTodoListData));

  showBulletPoints("task");
};

const updList = (updListId: string, updData: IUpdBulletPointData, isRemove: boolean | undefined): void => {
  const todoList: ITodoListData = getTodoListDataByID(updListId) as ITodoListData;

  const updTodoListData: ITodoListData = { ...todoList, name: updData.text as string };

  store.dispatch(createUpdTodoListsAction({ todoListData: updTodoListData, isRemove }));

  showBulletPoints("list");
};

const updateTodoListsData = (data: IUpdTodoListsData): void => {
  if (data.updDataType === "task") updTask(data.bulletPointId, data.updData, data.isRemove);
  if (data.updDataType === "list") updList(data.bulletPointId, data.updData, data.isRemove);
};

export default updateTodoListsData;
