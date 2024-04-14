const displayImportantTasksList = (): void => {
  const importantTasksList: HTMLDivElement = document.querySelector("#tasks-list-important") as HTMLDivElement;
  const tasksGroupBlock: HTMLDivElement = importantTasksList.parentElement as HTMLDivElement;

  const hasListTasks: boolean = Boolean(importantTasksList.children.length);

  hasListTasks ? tasksGroupBlock.classList.remove("none") : tasksGroupBlock.classList.add("none");
};

export default displayImportantTasksList;
