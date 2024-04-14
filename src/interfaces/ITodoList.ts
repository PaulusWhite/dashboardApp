interface ITask {
  isCompleted: boolean;
  isImportant: boolean;
  text: string;
  id: string;
}

interface ITodoList {
  allTasks: ITask[];
  importantTasks: ITask[];
}

export { ITask, ITodoList };
