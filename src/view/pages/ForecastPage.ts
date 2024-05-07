//Components
import ForecastSearchField from "../components/forecastPage/ForecastSearchField";

const ForecastPage = (): string => {
  const view = `
    <main class="forecast-page">
      <div class="forecast-page__basic-window">
      
        <div class="main-interface">
          ${ForecastSearchField()}

          <p class="main-interface__time">
            <span class="main-interface__date"></span> | 
            <span class="main-interface__hour"></span>
          </p>

          <div class="detailed-info"></div>

          <ul class="hours-list"></ul>
        </div>

        <div class="nav-interface">
          <div class="day-basic-info"></div>

          <hr>
          <h2 class="nav-interface__heading">The Next Days Forecast</h2>

          <nav class="forecast-nav"></nav>
        </div>

      </div>
    </main>
  `;

  return view;
};

export default ForecastPage;
