//Storage
import { getGreetingTimeoutID } from "../storage/getSetGreetingTimeoutID";

//Components
import UserNameInputWindow from "../components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules for MainPage
import setGreeting from "../modules/mainPage/setGreeting";

//Modules for TodoApp
import addBulletPoint from "../modules/todoApp/addBulletPoint";
import showBulletPoints from "../modules/todoApp/showBulletPoints";
import displayTaskOptionsMenu from "../modules/todoApp/displayTaskOptionsMenu";
// import updateTask from "../modules/todoApp/updateTask";

const runRouterFunctional = (path: TPath) => {
  document.body.innerHTML += UserNameInputWindow();

  if (path !== "/") clearTimeout(getGreetingTimeoutID());

  if (path === "/") {
    setGreeting();
  }
  if (path === "/todo") {
    showBulletPoints("list");
    addBulletPoint("my-todo-lists");
  }
  if (path === "/todo/list/") {
    showBulletPoints("task");
    addBulletPoint("todo-list");
    // updateTask();
    displayTaskOptionsMenu();
  }
};

export default runRouterFunctional;
