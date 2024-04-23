//Interfaces
import { TPageClass, TBulletPointType, IUpdBulletPointData } from "../../interfaces/ITodoList";

//Modules
import updateTodoListsData from "./updateTodoListsData";

const displayEditMode = (bulletPoint: HTMLLIElement, editModeField: HTMLDivElement, textField: HTMLParagraphElement) => {
  bulletPoint.classList.toggle("bullet-point__edit-mode");
  editModeField.classList.toggle("none");
  textField.classList.toggle("none");
};

const getEditModeElements = (bulletPoint: HTMLLIElement) => {
  const editModeField: HTMLDivElement = bulletPoint.children[2] as HTMLDivElement;
  const editInput: HTMLInputElement = editModeField.firstElementChild as HTMLInputElement;
  const textField: HTMLParagraphElement = bulletPoint.children[1] as HTMLParagraphElement;

  return { editModeField, editInput, textField };
};

const editBulletPointTextAction = (bulletPoint: HTMLLIElement, bulletPointId: string, bulletPointType: TBulletPointType) => {
  const { editInput, textField, editModeField } = getEditModeElements(bulletPoint);

  displayEditMode(bulletPoint, editModeField, textField);

  const newBulletPointTextValue: string = editInput.value.replace(/\s{2,}/g, " ").trim();

  const updData: IUpdBulletPointData = {
    text: newBulletPointTextValue,
  };

  const isBulletPointRemoved: boolean = !newBulletPointTextValue ? true : false; //if input is empty then bullet point should be deleted

  updateTodoListsData({ bulletPointId, updData, updDataType: bulletPointType, isRemove: isBulletPointRemoved });
};

const markTaskAction = (taskElement: HTMLLIElement, taskID: string, type: "importance" | "status") => {
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

const setEditModeAction = (
  bulletPoint: HTMLLIElement,
  bulletPointId: string,
  pageClass: TPageClass,
  bulletPointType: TBulletPointType,
) => {
  const { editInput, textField, editModeField } = getEditModeElements(bulletPoint);

  displayEditMode(bulletPoint, editModeField, textField);

  const page: HTMLDivElement = document.querySelector(`.${pageClass}`) as HTMLDivElement;

  editInput.value = textField.innerHTML;
  editInput.focus();

  const editTaskWithKeuboardAction = (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      editBulletPointTextAction(bulletPoint, bulletPointId, bulletPointType);
    }
  };

  const removeEditMode = (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;
    const clickedBulletPointInput: HTMLInputElement | null = target.closest(".bullet-point__edit-input");
    const clickedBulletPoind: HTMLDivElement | null = target.closest(".bullet-point");

    if (clickedBulletPoind && clickedBulletPoind.id === bulletPointId && clickedBulletPointInput) return;

    displayEditMode(bulletPoint, editModeField, textField);

    page.removeEventListener("click", removeEditMode);
    bulletPoint.removeEventListener("keydown", editTaskWithKeuboardAction);
  };

  bulletPoint.addEventListener("keydown", editTaskWithKeuboardAction);

  setTimeout(() => {
    page.addEventListener("click", removeEditMode);
  }, 0);
};

const updateBulletPoint = (pageClass: TPageClass) => {
  const page: HTMLDivElement = document.querySelector(`.${pageClass}`) as HTMLDivElement;

  page.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;
    const bulletPointType: TBulletPointType = pageClass === "my-todo-lists" ? "list" : "task";

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
    if (target.closest(".popup-options__delete-btn")) {
      updateTodoListsData({ updDataType: "task", bulletPointId, updData: {}, isRemove: true });
    }
    if (target.closest(".popup-options__edit-btn")) setEditModeAction(bulletPoint, bulletPointId, pageClass, bulletPointType);
    if (target.closest(".bullet-point__edit-btn")) editBulletPointTextAction(bulletPoint, bulletPointId, bulletPointType);
  });
};

export default updateBulletPoint;
