interface ITask {
  isCompleted: boolean;
  isImportant: boolean;
  text: string;
  id: string;
}

interface ITodoList {
  allTasks: ITask[];
}

interface IUpdatedTaskData {
  isCompleted?: boolean;
  isImportant?: boolean;
  text?: string;
}

export { ITask, ITodoList, IUpdatedTaskData };
