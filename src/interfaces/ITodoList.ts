interface ITask {
  isCompleted: boolean;
  isImportant: boolean;
  text: string;
  id: string;
}

interface ITodoList {
  allTasks: ITask[];
  name: string;
  id: string;
}

type TMyTodoLists = ITodoList[];

interface IUpdBulletPointData {
  isCompleted?: boolean;
  isImportant?: boolean;
  text?: string;
}

type TBulletPointBtnType = "complete" | "important" | "editTaskName" | "editListName" | "delete";

interface IBulletPointData {
  isCompleted?: boolean;
  isImportant?: boolean;
  isEditMode?: boolean;
  id: string;
  text: string;
}

interface IBulletPointBtnData {
  icon: string;
  className:
    | "bullet-point__complete-btn"
    | "bullet-point__important-btn"
    | "bullet-point__edit-btn"
    | "bullet-point__option-delete-list-btn"
    | "bullet-point__option-edit-list-btn";
}

interface IBulletPointObjectData {
  complete?: IBulletPointBtnData;
  important?: IBulletPointBtnData;
  editTaskName?: IBulletPointBtnData;
  editListName?: IBulletPointBtnData;
  delete?: IBulletPointBtnData;
}

interface IUpdTodoListsData {
  updDataType: TBulletPointType;
  bulletPointId: string;
  updData: IUpdBulletPointData;
  isRemove?: boolean;
}

interface IEditModeElements {
  editModeField: HTMLDivElement;
  editInput: HTMLInputElement;
  textField: HTMLParagraphElement;
}

type TBulletPointType = "task" | "list";
type TPageClass = "todo-list" | "my-todo-lists";

export { ITask, ITodoList, IUpdBulletPointData, IBulletPointBtnData, IBulletPointData, IBulletPointObjectData, IUpdTodoListsData };
export { TMyTodoLists, TBulletPointBtnType, TBulletPointType, TPageClass, IEditModeElements };
