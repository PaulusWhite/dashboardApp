//Components
import Toolbar from "../components/mainPage/Toolbar";

const MainPage = (): string => {
  const view = `
    <main class="main">
      <section class="forecast"></section>

      ${Toolbar()}

      <div class="wrapper">

        <div class="greeting">
          <p class="greeting__time"></p>
          <p class="greeting__name"></p>
        </div>

        <div class="quotation"></div>
      </div>

      <div class="empty"></div>

    </main>
  `;

  return view;
};

export default MainPage;
