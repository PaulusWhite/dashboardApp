//Components
import BackBtn from "../components/common/BackBtn";
// import ForecastSearchField from "../components/forecastPage/ForecastSearchField";
import InpitField from "../components/todoApp/InputField";
import RelevantTime from "../components/forecastPage/RelevantTime";

//Utils
import getCurrentTime from "../../utils/getCurrentTime";
import getReadableDateValue from "../../utils/getReadableDateValue";

const ForecastPage = (): string => {
  const [hours, minutes] = getCurrentTime();
  const date: string = getReadableDateValue();

  const view = `
    <main class="forecast-page">
      <div class="forecast-page__basic-window">
      
        <div class="main-interface">
          ${InpitField("Enter name of location", "Search")}

          <p class="main-interface__time">
            ${RelevantTime({ time: `${hours}:${minutes}`, date })}
          </p>

          <div class="detailed-info"></div>

          <ul class="hours-list"></ul>
        </div>

        <div class="nav-interface">
          <div class="day-basic-info"></div>
          
          <nav class="forecast-nav"></nav>
        </div>

      </div>

      ${BackBtn("/")}
    </main>
  `;

  return view;
};

export default ForecastPage;
