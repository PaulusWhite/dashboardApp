//Storage
import { getGreetingTimeoutID } from "../storage/getSetGreetingTimeoutID";

//Components
import UserNameInputWindow from "../components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules for MainPage
import setGreeting from "../modules/mainPage/setGreeting";

//Modules for TodoApp
import addTask from "../modules/todoApp/addTask";
import showTasks from "../modules/todoApp/showTasks";
import displayTaskOptionsMenu from "../modules/todoApp/displayTaskOptionsMenu";
import updateTask from "../modules/todoApp/updateTask";

const runRouterFunctional = (path: TPath) => {
  if (path !== "/") clearTimeout(getGreetingTimeoutID());

  if (path === "/") {
    document.body.innerHTML += UserNameInputWindow();
    setGreeting();
  }
  if (path === "/todo") {
    showTasks();
    addTask();
    updateTask();
    displayTaskOptionsMenu();
  }
};

export default runRouterFunctional;
