//store
import store from "../../model/store";

//Utils
import getCurrentTime from "../../utils/getCurrentTime";

//Storage
import { setGreetingTimeoutID } from "../getSetGreetingTimeoutID";

const SEC_PER_MIN: number = 60;

const setGreeting = (): void => {
  const greetingTime: HTMLParagraphElement = document.querySelector(".greeting__time")!;
  const greetingName: HTMLParagraphElement = document.querySelector(".greeting__name")!;

  const [hours, minutes, seconds] = getCurrentTime();

  let userName: string | null = store.getState().userName;

  greetingTime.textContent = `${hours}:${minutes}`;
  userName = userName ? userName : "Buddy";

  const greetingPhrase: string = `Hello, dear ${userName}`;
  greetingName.textContent = greetingPhrase;

  const secTillNextMin: number = SEC_PER_MIN - +seconds;

  const greetingID: NodeJS.Timeout = setTimeout(() => {
    setGreeting();
  }, +`${secTillNextMin}000`);

  setGreetingTimeoutID(greetingID);
};

export default setGreeting;
