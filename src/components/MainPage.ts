//Components
import Toolbar from "./Toolbar";

const MainPage = (): string => {
  const view = `
    <main class="main">
      <section class="forecast">

        <div class="forecast__date">
          <span class="forecast__day">Monday, 4 May</span>
          <span class="forecast__day-desc">Clear conditions throughout the day</span>
        </div>


        <div class="forecast__temp">
          <span class="forecast__temp-data">
            <img class="forecast__icon">
            <span class="forecast__temp-value">11C</span>
          </span>

          <span class="forecast__location">Minsk, Belarus</span>
        </div>

      </section>

      ${Toolbar()}

      <div class="wrapper">

        <div class="greeting">
          <p class="greeting__time"></p>
          <p class="greeting__name"></p>
        </div>

        <div class="feauters-panel"></div>
      </div>

      <div class="empty"></div>

    </main>
  `;

  return view;
};

export default MainPage;
