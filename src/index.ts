import "./styles/style.scss";

//Router
import { router } from "./router/router";

import setNavLinkRouter from "./router/setNavLinkRouter";

//Controllers
import setUserName from "./controllers/setUserName";

router();
setNavLinkRouter();
setUserName();

window.addEventListener("popstate", router);
