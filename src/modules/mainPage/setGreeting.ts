//Utils
import getCurrentTime from "../../utils/getCurrentTime";

//Modules
import { setGreetingTimeoutID } from "../getSetGreetingTimeoutID";

//Components
import Greetings from "../../view/components/mainPage/Greetings";

const SEC_PER_MIN: number = 60;

const setGreeting = (): void => {
  const greetindField: HTMLDivElement = document.querySelector(".greeting")!;

  const [hours, minutes, seconds] = getCurrentTime();
  const greetingTime = `${hours}:${minutes}`;

  greetindField.innerHTML = Greetings(greetingTime);

  const secTillNextMin: number = SEC_PER_MIN - +seconds;

  const greetingID: NodeJS.Timeout = setTimeout(() => {
    setGreeting();
  }, +`${secTillNextMin}000`);

  setGreetingTimeoutID(greetingID);
};

export default setGreeting;
