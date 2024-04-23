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

interface IUpdatedTaskData {
  isCompleted?: boolean;
  isImportant?: boolean;
  text?: string;
}

type TBulletPointBtnType = "complete" | "important" | "edit";

interface IBulletPointData {
  isCompleted?: boolean;
  isImportant?: boolean;
  isEditMode?: boolean;
  id: string;
  text: string;
}

interface IBulletPointBtnData {
  icon: string;
  className: "bullet-point__complete-btn" | "bullet-point__important-btn" | "bullet-point__edit-btn";
}

interface IBulletPointObjectData {
  complete?: IBulletPointBtnData;
  important?: IBulletPointBtnData;
  edit?: IBulletPointBtnData;
}

type TBulletPointType = "task" | "list";
type TPageClass = "todo-list" | "my-todo-lists";

export { ITask, ITodoList, IUpdatedTaskData, IBulletPointBtnData, IBulletPointData, IBulletPointObjectData };
export { TMyTodoLists, TBulletPointBtnType, TBulletPointType, TPageClass };
