//Interfaces
import { IRoute } from "./../interfaces/IRouter";

//runRouterPathFunc
import runRouterFunctional from "./runRouteFunctional";

//Utils
import getCurrentTodoListIdFromURL from "../utils/getCurrentTodoListIdFromURL";
import getCurrentURLPath from "../utils/getCurrentURLPath";

//Page Components
import TodoListPage from "../components/todoApp/TodoListPage";
import MyTodoListsPage from "../components/todoApp/MyTodoListsPage";
import MainPage from "../components/mainPage/MainPage";
import ForecastPage from "../components/forecastApp/ForeastPage";

const router = (): void => {
  const routers: IRoute[] = [
    { path: "/", view: MainPage() },
    { path: "/todo", view: MyTodoListsPage() },
    { path: "/todo/list/", view: TodoListPage(getCurrentTodoListIdFromURL()) },
    { path: "/forecast", view: ForecastPage() },
  ];

  const currentPath: string = getCurrentURLPath();
  // let isMatch = false;

  routers.forEach((route: IRoute) => {
    if (route.path === currentPath) {
      // isMatch = true;
      document.body.innerHTML = "";
      document.body.innerHTML += route.view;

      runRouterFunctional(currentPath);
    }
  });

  // if (!isMatch) {
  //   window.history.pushState(null, "", "/");
  // }
};

const navigateTo = (url: string): void => {
  window.history.pushState(null, "", url);

  // if (url === "/") {
  //   return;
  // }

  router();
};

export { router, navigateTo };
