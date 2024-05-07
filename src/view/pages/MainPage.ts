//Components
import Toolbar from "../components/mainPage/Toolbar";

const MainPage = (): string => {
  const view = `
    <main class="main-page">
      <section class="forecast"></section>

      ${Toolbar()}

      <div class="wrapper">

        <div class="greeting"></div>

        <div class="quotation"></div>
      </div>

      <div class="empty"></div>

    </main>
  `;

  return view;
};

export default MainPage;
