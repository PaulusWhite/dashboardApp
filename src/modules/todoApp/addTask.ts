//storage
import { getTodoList, setTodoList } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask } from "../../interfaces/ITodoList";

//utils
import getRandomID from "../../utils/getRandomID";

const addTask = (): void => {
  const addBtn: HTMLButtonElement = document.querySelector(".todo-list__add-btn") as HTMLButtonElement;

  addBtn.addEventListener("click", () => {
    const input: HTMLInputElement = document.querySelector("#todo-list__input") as HTMLInputElement;
    const inputValue: string = input.value.trim();

    if (!inputValue) return;

    const currentTodoList: ITodoList = getTodoList() as ITodoList; //todo list will have been defined by this time

    const newTask: ITask = {
      isCompleted: false,
      isImportant: false,
      text: inputValue,
      id: getRandomID(),
    };

    const newTodoList: ITodoList = {
      allTasks: [...currentTodoList.allTasks, newTask],
      importantTasks: [...currentTodoList.importantTasks],
    };

    setTodoList(newTodoList);
  });
};

export default addTask;
