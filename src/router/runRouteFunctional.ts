//Interfaces
import { TPath } from "../interfaces/IRouter";

//Modules
import setGreeting from "../modules/mainPage/setGreeting";

const runRouterFunctional = (path: TPath): void => {
  if(path === "/"){
    setGreeting();
  }
}

export default runRouterFunctional;