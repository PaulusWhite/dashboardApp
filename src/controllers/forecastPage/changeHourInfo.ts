//store
import store from "../../model/store";

//Actions
import { createSetForecastCurrentIndexAction } from "../../model/actionCreators";

//controllers
import { setDetailedInfo } from "./showForecast";

const changeHourInfo = () => {
  const hoursList: HTMLUListElement = document.querySelector(".hours-list")!;

  hoursList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    const closest: HTMLLIElement | null = target.closest(".hour");

    if (closest && !closest.classList.contains("checked-point")) {
      const prevCheckedHour: HTMLLIElement = document.querySelector(".hours-list .checked-point")!;
      prevCheckedHour.classList.remove("checked-point");
      closest.classList.add("checked-point");

      const hourIndex: number = +closest.id;

      store.dispatch(createSetForecastCurrentIndexAction(hourIndex));
      setDetailedInfo();
    }
  });
};

export default changeHourInfo;
