//Utils
import getCurrentTime from "../../utils/getCurrentTime";

//Storage
import { setGreetingTimeoutID } from "../../storage/getSetGreetingTimeoutID";

const SEC_PER_MIN: number = 60;

const setGreeting = (userName: string | null): void => {
  const greetingTime: HTMLParagraphElement = document.querySelector(".greeting__time")!;
  const greetingName: HTMLParagraphElement = document.querySelector(".greeting__name")!;

  const [hours, minutes, seconds] = getCurrentTime();

  greetingTime.textContent = `${hours}:${minutes}`;
  userName = userName ? userName : "Buddy";

  const greetingPhrase: string = `Hello, dear ${userName}`;
  greetingName.textContent = greetingPhrase;

  const secTillNextMin: number = SEC_PER_MIN - +seconds;

  const greetingID: NodeJS.Timeout = setTimeout(() => {
    setGreeting(userName);
  }, +`${secTillNextMin}000`);

  setGreetingTimeoutID(greetingID);
};

export default setGreeting;
