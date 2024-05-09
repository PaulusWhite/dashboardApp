//store
import store from "../../model/store";

//Actions
import { createSetForecastDayIndexAction } from "../../model/actionCreators";

//Controllers
import { setHoursInfo, setDetailedInfo } from "./showForecast";

const setDayInfo = () => {
  const periodDaysList: HTMLUListElement = document.querySelector(".forecast-nav__period-days-list")!;

  periodDaysList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    const closest: HTMLElement | null = target.closest(".period-day");

    if (closest && !closest.classList.contains("checked-point")) {
      const prevCheckedDay: HTMLLIElement | null = document.querySelector(".forecast-nav__period-days-list .checked-point");

      if (prevCheckedDay) prevCheckedDay.classList.remove("checked-point");
      closest.classList.add("checked-point");

      const dayIndex: number = +closest.id;

      store.dispatch(createSetForecastDayIndexAction(dayIndex));

      setHoursInfo();
      setDetailedInfo();
    }
  });
};

export default setDayInfo;
