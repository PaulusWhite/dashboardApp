//Components
import UserNameInputWindow from "../components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules
import setGreeting from "../modules/mainPage/setGreeting";
import addTask from "../modules/todoApp/addTask";
import showTasks from "../modules/todoApp/showTasks";

const runRouterFunctional = (path: TPath): void => {
  if (path === "/") {
    document.body.innerHTML += UserNameInputWindow();
    setGreeting();
  }
  if (path === "/todo") {
    showTasks();
    addTask();
  }
};

export default runRouterFunctional;
