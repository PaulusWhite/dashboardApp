//Utils
import getCurrentTime from "../../utils/getCurrentTime";

//storage Modules
import { getUserName } from "../../storage/getSetUserName";

const setGreeting = (): void => {
  const greetingTime: HTMLParagraphElement = document.querySelector(".greeting__time") as HTMLParagraphElement;
  const greetingName: HTMLParagraphElement = document.querySelector(".greeting__name") as HTMLParagraphElement;

  const [hours, minutes] = getCurrentTime();
  greetingTime.innerHTML = `${hours}:${minutes}`;

  let userName: string | null = getUserName();
  userName = userName ? userName : "Buddy";

  const greetingPhrase: string = `Hello, dear ${userName}`;
  greetingName.innerHTML = greetingPhrase;
}

export default setGreeting;