//Storage
import { getGreetingTimeoutID } from "../modules/getSetGreetingTimeoutID";

//Components
import UserNameInputWindow from "../view/components/UserNameInputWindow";

//Interfaces
import { TPath } from "../interfaces/IRouter";
import { TPageClass, TBulletPointType } from "../interfaces/ITodoList";

//Modules and controllers for MainPage
import setGreeting from "../modules/mainPage/setGreeting";
import setQuotationAndWeatherForecast from "../controllers/mainPage/setQuotationAndWeatherForecast";

//Modules and controllers for TodoApp
import addBulletPoint from "../controllers/todoPage/addBulletPoint";
import showBulletPoints from "../modules/todoApp/showBulletPoints";
import displayTaskOptionsMenu from "../modules/todoApp/displayTaskOptionsMenu";
import updateBulletPoint from "../modules/todoApp/updateBulletPoint";
import setTodoListName from "../modules/todoApp/setTodoListName";

const runRouterFunctional = (path: TPath): void => {
  document.body.innerHTML += UserNameInputWindow();

  if (path !== "/") clearTimeout(getGreetingTimeoutID());

  if (path === "/") {
    // setQuotationAndWeatherForecast()
    setGreeting();
  }
  if (path === "/todo") {
    const myTodoListsPageClass: TPageClass = "todo-lists-page";
    const bulletPointType: TBulletPointType = "list";

    showBulletPoints(bulletPointType);
    addBulletPoint(myTodoListsPageClass);
    updateBulletPoint(myTodoListsPageClass);
  }
  if (path === "/todo/list/") {
    const todoListPageClass: TPageClass = "todo-list-page";
    const bulletPointType: TBulletPointType = "task";

    setTodoListName();
    showBulletPoints(bulletPointType);
    addBulletPoint(todoListPageClass);
    updateBulletPoint(todoListPageClass);
    displayTaskOptionsMenu();
  }
};

export default runRouterFunctional;
