//Interfaces
import { TPageClass, TBulletPointType, IUpdBulletPointData, IEditModeElements } from "../../interfaces/ITodoList";

//Modules
import updateTodoListsData from "./updateTodoListsData";

const displayEditMode = (bulletPoint: HTMLLIElement, editModeField: HTMLDivElement, textField: HTMLParagraphElement): void => {
  const optionEditListBtn: HTMLButtonElement | null = document.querySelector(".bullet-point__option-edit-list-btn");

  bulletPoint.classList.toggle("bullet-point__edit-mode");
  editModeField.classList.toggle("none");
  textField.classList.toggle("none");
  optionEditListBtn?.classList.toggle("none");
};

const getEditModeElements = (bulletPoint: HTMLLIElement, bulletPointType: TBulletPointType): IEditModeElements => {
  const editModeFieldIndex: 2 | 1 = bulletPointType === "task" ? 2 : 1;
  const textFieldIndex: 1 | 0 = bulletPointType === "task" ? 1 : 0;

  const editModeField: HTMLDivElement = bulletPoint.children[editModeFieldIndex] as HTMLDivElement;
  const editInput: HTMLInputElement = editModeField.firstElementChild as HTMLInputElement;
  const textField: HTMLParagraphElement = bulletPoint.children[textFieldIndex] as HTMLParagraphElement;

  return { editModeField, editInput, textField };
};

const editBulletPointTextAction = (bulletPoint: HTMLLIElement, bulletPointId: string, bulletPointType: TBulletPointType): void => {
  const { editInput, textField, editModeField } = getEditModeElements(bulletPoint, bulletPointType);

  displayEditMode(bulletPoint, editModeField, textField);

  const newBulletPointTextValue: string = editInput.value.replace(/\s{2,}/g, " ").trim();

  const updData: IUpdBulletPointData = {
    text: newBulletPointTextValue,
  };

  const isBulletPointRemoved: boolean = !newBulletPointTextValue ? true : false; //if input is empty then bullet point should be deleted

  updateTodoListsData({ bulletPointId, updData, updDataType: bulletPointType, isRemove: isBulletPointRemoved });
};

const markTaskAction = (taskElement: HTMLLIElement, taskID: string, type: "importance" | "status"): void => {
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
): void => {
  const { editInput, textField, editModeField } = getEditModeElements(bulletPoint, bulletPointType);

  displayEditMode(bulletPoint, editModeField, textField);

  const page: HTMLDivElement = document.querySelector(`.${pageClass}`)!; //tag main

  editInput.value = textField.innerHTML;
  editInput.focus();

  const editTaskWithKeyboardAction = (event: KeyboardEvent): void => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      editBulletPointTextAction(bulletPoint, bulletPointId, bulletPointType);

      page.removeEventListener("click", removeEditMode);
      bulletPoint.removeEventListener("keydown", editTaskWithKeyboardAction);
    }
  };

  const removeEditMode = (event: Event): void => {
    const target: HTMLElement = event.target as HTMLElement;

    if (target.closest(".bullet-point__edit-mode") && !target.closest(".bullet-point__edit-btn")) return;

    if (target.closest(".bullet-point__edit-btn")) {
      editBulletPointTextAction(bulletPoint, bulletPointId, bulletPointType);
    } else displayEditMode(bulletPoint, editModeField, textField);

    page.removeEventListener("click", removeEditMode);
    bulletPoint.removeEventListener("keydown", editTaskWithKeyboardAction);
  };

  bulletPoint.addEventListener("keydown", editTaskWithKeyboardAction);

  setTimeout(() => {
    page.addEventListener("click", removeEditMode);
  }, 0);
};

const updateBulletPoint = (pageClass: TPageClass): void => {
  const page: HTMLDivElement = document.querySelector(`.${pageClass}`)!;

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
    if (target.closest(".popup-options__delete-btn") || target.closest(".bullet-point__option-delete-list-btn")) {
      updateTodoListsData({ updDataType: bulletPointType, bulletPointId, updData: {}, isRemove: true });
    }
    if (target.closest(".popup-options__edit-btn") || target.closest(".bullet-point__option-edit-list-btn")) {
      setEditModeAction(bulletPoint, bulletPointId, pageClass, bulletPointType);
    }
  });
};

export default updateBulletPoint;
