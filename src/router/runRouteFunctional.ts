//Components
import UserNameInputWindow from "../components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules
import setGreeting from "../modules/mainPage/setGreeting";
import addTask from "../modules/todoApp/addTask";

const runRouterFunctional = (path: TPath): void => {
  if (path === "/") {
    document.body.innerHTML += UserNameInputWindow();
    setGreeting();
  }
  if (path === "/todo") {
    addTask();
  }
};

export default runRouterFunctional;
