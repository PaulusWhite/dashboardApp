import "./styles/style.scss";

//Router
import { router } from "./router/router";

//Modules
import askUserName from "./modules/askUserName";
import setNavLinkRouter from "./router/setNavLinkRouter";

router();
setNavLinkRouter();
askUserName();

window.addEventListener("popstate", router);
