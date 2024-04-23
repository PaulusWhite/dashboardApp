//Interfaces
import { TPageClass } from "../../interfaces/ITodoList";

//Modules
import updateTodoListsData from "./updateTodoListsData";

// const displayEditMode = (taskElement: HTMLLIElement, editModeField: HTMLDivElement, textField: HTMLParagraphElement) => {
//   taskElement.classList.toggle("bullet-point__edit-mode");
//   editModeField.classList.toggle("none");
//   textField.classList.toggle("none");
// };

// const getEditModeElements = (taskElement: HTMLLIElement) => {
//   const editModeField: HTMLDivElement = taskElement.children[2] as HTMLDivElement;
//   const editInput: HTMLInputElement = editModeField.firstElementChild as HTMLInputElement;
//   const textField: HTMLParagraphElement = taskElement.children[1] as HTMLParagraphElement;

//   return { editModeField, editInput, textField };
// };

const markTaskAction = (taskElement: HTMLLIElement, taskID: string, type: "importance" | "status") => {
  // interface IUpdTaskData {
  //   isImportant?: boolean,
  //   isCompleted?: boolean,
  // }

  const markClass = type === "importance" ? "bullet-point__important" : "bullet-point__completed";
  taskElement.classList.toggle(markClass);

  const isTaskMarked: boolean = taskElement.classList.contains(`${markClass}`);

  const updTaskData = {
    [type === "importance" ? "isImportant" : "isCompleted"]: isTaskMarked, //
  };

  updateTodoListsData({
    updDataType: "task",
    bulletPointId: taskID,
    updData: updTaskData,
  });
};

// const setEditModeAction = (taskElement: HTMLLIElement, taskID: string) => {
//   const { editInput, textField, editModeField } = getEditModeElements(taskElement);

//   displayEditMode(taskElement, editModeField, textField);

//   const todoList: HTMLDivElement = document.querySelector(".todo-list") as HTMLDivElement;

//   editInput.value = textField.innerHTML;
//   editInput.focus();

//   const editTaskWithKeuboardAction = (event: KeyboardEvent) => {
//     if (event.code === "Enter" || event.code === "NumpadEnter") {
//       editTaskTextAction(taskElement, taskID);
//     }
//   };

//   const removeEditMode = (event: Event) => {
//     const target: HTMLElement = event.target as HTMLElement;
//     const clickedTaskInput: HTMLInputElement | null = target.closest(".task__edit-input");
//     const clickedTask: HTMLDivElement | null = target.closest(".task");

//     if (clickedTask && clickedTask.id === taskID && clickedTaskInput) return;

//     displayEditMode(taskElement, editModeField, textField);
//     todoList.removeEventListener("click", removeEditMode);
//     taskElement.removeEventListener("keydown", editTaskWithKeuboardAction);
//   };

//   taskElement.addEventListener("keydown", editTaskWithKeuboardAction);

//   setTimeout(() => {
//     todoList.addEventListener("click", removeEditMode);
//   }, 0);
// };

// const editTaskTextAction = (taskElement: HTMLLIElement, taskID: string) => {
//   const { editInput, textField, editModeField } = getEditModeElements(taskElement);

//   displayEditMode(taskElement, editModeField, textField);

//   const newTaskText: string = editInput.value.replace(/\s{2,}/g, " ").trim();

//   const updatedTaskData: IUpdatedTaskData = {
//     text: newTaskText,
//   };

//   const isTaskRemoved: boolean = !newTaskText ? true : false;

//   updateTodoListsData(taskID, updatedTaskData, isTaskRemoved);
// };

const updateBulletPoint = (pageClass: TPageClass) => {
  const page: HTMLDivElement = document.querySelector(`.${pageClass}`) as HTMLDivElement;

  page.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".bullet-point")) return;

    const bulletPoint: HTMLLIElement = target.closest(".bullet-point") as HTMLLIElement;
    const bulletPointId: string = bulletPoint.id; // it can be either task id or list id

    if (target.closest(".bullet-point__complete-btn") || target.closest(".popup-options__complete-btn")) {
      markTaskAction(bulletPoint, bulletPointId, "status");
    }

    if (target.closest(".bullet-point__important-btn") || target.closest(".popup-options__important-btn")) {
      markTaskAction(bulletPoint, bulletPointId, "importance");
    }

    // //updating with popup-options menu (delete and edit)
    if (target.closest(".popup-options__delete-btn"))
      updateTodoListsData({ updDataType: "task", bulletPointId, updData: {}, isRemove: true });

    // if (target.closest(".popup-options__edit-btn")) setEditModeAction(taskElement, taskID);
    // if (target.closest(".bullet-point__edit-btn")) editTaskTextAction(taskElement, taskID);
  });
};

export default updateBulletPoint;
