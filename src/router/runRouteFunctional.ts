//Components
import UserNameInputWindow from "../components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules
import setGreeting from "../modules/mainPage/setGreeting";

const runRouterFunctional = (path: TPath): void => {
  if (path === "/") {
    document.body.innerHTML += UserNameInputWindow();
    setGreeting();
  }
};

export default runRouterFunctional;
