//Utils
import getCurrentTime from "../../utils/getCurrentTime";

//storage Modules
import { getUserName } from "../../storage/getSetUserName";

const SEC_PER_MIN: number = 60;

const setGreeting = (): void => {
  const greetingTime: HTMLParagraphElement = document.querySelector(".greeting__time") as HTMLParagraphElement;
  const greetingName: HTMLParagraphElement = document.querySelector(".greeting__name") as HTMLParagraphElement;

  const [hours, minutes, seconds] = getCurrentTime();
  greetingTime.textContent = `${hours}:${minutes}`;

  let userName: string | null = getUserName();
  userName = userName ? userName : "Buddy";

  const greetingPhrase: string = `Hello, dear ${userName}`;
  greetingName.textContent = greetingPhrase;

  const secTillNextMin: number = SEC_PER_MIN - +seconds;

  setTimeout( () => {
    setGreeting();
  }, +`${secTillNextMin}000`);
}

export default setGreeting;