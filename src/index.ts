import "./styles/style.scss";

//Router
import { router } from "./router/router";

//Modules
import setMainPage from "./modules/setMainPage";
import askUserName from "./modules/askUserName";

setMainPage();
askUserName();
router();
