//Components
import MainPage from "../components/MainPage";
import UserNameInputWindow from "../components/UserNameInputWindow";

const setMainPage = (): void => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += MainPage();
  body.innerHTML += UserNameInputWindow();
}

export default setMainPage;