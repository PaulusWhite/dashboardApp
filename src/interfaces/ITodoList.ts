interface ITaskData {
  isCompleted: boolean;
  isImportant: boolean;
  text: string;
  id: string;
}

interface ITodoListData {
  allTasks: ITaskData[];
  name: string;
  id: string;
}

type TTodoListsData = ITodoListData[];

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
type TPageClass = "todo-list-page" | "todo-lists-page";

export {
  ITaskData,
  ITodoListData,
  IUpdBulletPointData,
  IBulletPointBtnData,
  IBulletPointData,
  IBulletPointObjectData,
  IUpdTodoListsData,
};
export { TTodoListsData, TBulletPointBtnType, TBulletPointType, TPageClass, IEditModeElements };
