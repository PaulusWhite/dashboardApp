//Components
import MainPage from "../components/MainPage";

const setMainPage = (): void => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;

  body.innerHTML += MainPage();
};

export default setMainPage;
