//Interfaces
import { IRoute } from "./../interfaces/IRouter";

//runRouterPathFunc
import runRouterFunctional from "./runRouteFunctional";

const router = (): void => {
  const routers: IRoute[] = [{ path: "/" }];

  const currentPath: string = window.location.pathname;
  let isMatch = false;

  routers.forEach((route: IRoute) => {
    if (route.path === currentPath) {
      isMatch = true;
      runRouterFunctional(currentPath);
    }
  });

  if (!isMatch) {
    window.history.pushState(null, "", "/");
  }
};

// const navigateTo = (url: string) => {
//   window.history.pushState(null, "", url);

//   if (url === "/") {
//     return;
//   }

//   router();
// };

export { router };
