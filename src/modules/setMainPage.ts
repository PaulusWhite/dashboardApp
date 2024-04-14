//Components
import MainPage from "../components/MainPage";
import UserNameInputWindow from "../components/UserNameInputWindow";

import TodoList from "../components/todo-list/TodoList";

const setMainPage = (): void => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += MainPage();
  body.innerHTML += UserNameInputWindow();
  body.innerHTML += TodoList();
};

export default setMainPage;
