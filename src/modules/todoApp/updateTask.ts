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

const markAsCompletedAtion = (taskElement: HTMLDivElement, taskID: string) => {
  taskElement.classList.toggle("task__completed");
  const isTaskCompleted: boolean = taskElement.classList.contains("task__completed");

  const updatedTaskData: IUpdatedTaskData = {
    isCompleted: isTaskCompleted,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const markAsImportantAction = (taskElement: HTMLDivElement, taskID: string) => {
  taskElement.classList.toggle("task__important");
  const isTaskImportant: boolean = taskElement.classList.contains("task__important");

  const updatedTaskData: IUpdatedTaskData = {
    isImportant: isTaskImportant,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const updateTask = (): void => {
  const allTasksList: HTMLDivElement = document.querySelector(".tasks") as HTMLDivElement;

  allTasksList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".task")) return;
    const taskElement: HTMLDivElement = target.closest(".task") as HTMLDivElement;
    const taskID: string = taskElement.id;

    if (target.closest(".task__complete-btn")) markAsCompletedAtion(taskElement, taskID);
    if (target.closest(".task__important-btn")) markAsImportantAction(taskElement, taskID);
  });
};

export default updateTask;
