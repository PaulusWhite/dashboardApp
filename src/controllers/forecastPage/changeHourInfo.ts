//store
import store from "../../model/store";

//Actions
import { createSetForecastCurrentIndexAction } from "../../model/actionCreators";

//controllers
import { setDetailedInfo } from "./showForecast";
import { setRelevantTime } from "./showForecast";

const changeHourInfo = () => {
  const hoursList: HTMLUListElement = document.querySelector(".hours-list")!;

  hoursList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    const closest: HTMLLIElement | null = target.closest(".hour");

    if (closest && !closest.classList.contains("checked-point")) {
      const prevCheckedHour: HTMLLIElement | null = document.querySelector(".hours-list .checked-point");

      if (prevCheckedHour) prevCheckedHour.classList.remove("checked-point");

      closest.classList.add("checked-point");

      const hourIndex: number = +closest.id;

      store.dispatch(createSetForecastCurrentIndexAction(hourIndex));
      setDetailedInfo();
      setRelevantTime();
    }
  });
};

export default changeHourInfo;
