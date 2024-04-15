//Interfaces
import { IRoute } from "./../interfaces/IRouter";

//runRouterPathFunc
import runRouterFunctional from "./runRouteFunctional";

//Components
import TodoListPage from "../components/todo-list/TodoListPage";
import MainPage from "../components/MainPage";

const router = () => {
  const routers: IRoute[] = [
    { path: "/", view: MainPage() },
    { path: "/todo", view: TodoListPage() },
  ];

  const currentPath: string = window.location.pathname;
  let isMatch = false;

  routers.forEach((route: IRoute) => {
    if (route.path === currentPath) {
      isMatch = true;
      console.log(route);
      document.body.innerHTML = "";
      document.body.innerHTML += route.view;

      runRouterFunctional(currentPath);
    }
  });

  if (!isMatch) {
    window.history.pushState(null, "", "/");
  }
};

const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);

  // if (url === "/") {
  //   return;
  // }

  router();
};

export { router, navigateTo };
