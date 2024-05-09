//store
import store from "../../model/store";

//Components
import RelevantTime from "../../view/components/forecastPage/RelevantTime";

//Modules
import transformCurrenTime from "../../modules/forecastApp/transformCurrenTime";

const setRelevantTime = () => {
  const weatherForecast = store.getState().weatherForecast!;
  const { time, date } = weatherForecast.current.basicInfo; //relevant time
  const corrnetTime = transformCurrenTime(time);
  const relevainTimeField: HTMLParagraphElement = document.querySelector(".main-interface__time")!;

  relevainTimeField.innerHTML = RelevantTime({ date, time: corrnetTime });
};

export default setRelevantTime;
