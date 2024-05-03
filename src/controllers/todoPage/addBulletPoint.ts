//store
import store from "../../model/store";

//Actions
import { createAddTodoListAction, createUpdTodoListAction } from "../../model/actionCreators";

//Interfaces
import { ITodoListData, ITaskData, TBulletPointType, TPageClass } from "../../interfaces/ITodoList";

//utils
import getRandomID from "../../utils/getRandomID";
import getCurrentTodoListIdFromURL from "../../utils/getCurrentTodoListIdFromURL";

//Modules
import showBulletPoints from "../../modules/todoApp/showBulletPoints";

//Controllers
import getTodoListDataByID from "./getTodoListDataByID";

const addBulletPointAction = (type: TBulletPointType): void => {
  const input: HTMLInputElement = document.querySelector("#input-field__input")!;
  const inputValue: string = input.value.replace(/\s{2,}/g, " ").trim();

  if (!inputValue) return;

  if (type === "task") {
    const currenTodoListId = getCurrentTodoListIdFromURL();

    const newTask: ITaskData = {
      isCompleted: false,
      isImportant: false,
      text: inputValue,
      id: getRandomID(),
    };

    const updList: ITodoListData = getTodoListDataByID(currenTodoListId) as ITodoListData;
    updList.allTasks.push(newTask);

    store.dispatch(createUpdTodoListAction(updList));
  }

  if (type === "list") {
    const addedTodoListData: ITodoListData = {
      allTasks: [],
      name: inputValue,
      id: getRandomID(),
    } as ITodoListData;

    store.dispatch(createAddTodoListAction(addedTodoListData));
  }

  input.value = "";

  showBulletPoints(type);

  document.body.scrollIntoView(false);
};

const addBulletPoint = (pageClass: TPageClass): void => {
  const page: HTMLDivElement = document.querySelector(`.${pageClass}`)!;
  const addBtn: HTMLButtonElement = document.querySelector(".input-field__add-btn")!;

  const bulletPointType: TBulletPointType = pageClass === "my-todo-lists" ? "list" : "task";

  page.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") addBulletPointAction(bulletPointType);
  });

  addBtn.addEventListener("click", () => addBulletPointAction(bulletPointType));
};

export default addBulletPoint;
