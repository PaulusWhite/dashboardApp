//storage
import { getTodoListById, setTodoList } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask, TBulletPointType, TPageClass } from "../../interfaces/ITodoList";

//utils
import getRandomID from "../../utils/getRandomID";

//Modules
import showBulletPoints from "./showBulletPoints";

const addBulletPointAction = (type: TBulletPointType, listId?: string) => {
  const input: HTMLInputElement = document.querySelector("#input-field__input") as HTMLInputElement;
  const inputValue: string = input.value.replace(/\s{2,}/g, " ").trim();

  if (!inputValue) return;

  let addedTodoList: ITodoList;

  if (type === "task" && listId) {
    const newTask: ITask = {
      isCompleted: false,
      isImportant: false,
      text: inputValue,
      id: getRandomID(),
    };

    const updList: ITodoList = getTodoListById(listId) as ITodoList;
    updList.allTasks.push(newTask);

    addedTodoList = updList;
  } else {
    addedTodoList = {
      allTasks: [],
      name: inputValue,
      id: getRandomID(),
    } as ITodoList;
  }

  input.value = "";

  setTodoList(addedTodoList);
  showBulletPoints(type);

  document.body.scrollIntoView(false);
};

const addBulletPoint = (pageClass: TPageClass) => {
  const page: HTMLDivElement = document.querySelector(`.${pageClass}`) as HTMLDivElement;
  const addBtn: HTMLButtonElement = document.querySelector(".input-field__add-btn") as HTMLButtonElement;

  const bulletPointType: TBulletPointType = pageClass === "my-todo-lists" ? "list" : "task";

  page.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") addBulletPointAction(bulletPointType);
  });

  addBtn.addEventListener("click", () => addBulletPointAction(bulletPointType));
};

export default addBulletPoint;
