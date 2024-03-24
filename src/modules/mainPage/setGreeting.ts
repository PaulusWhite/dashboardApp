//Utils
import getCurrentTime from "../../utils/getCurrentTime";

const setGreeting = (): void => {
  const greetingTime: HTMLParagraphElement = document.querySelector(".greeting__time") as HTMLParagraphElement;
  const greetingName: HTMLParagraphElement = document.querySelector(".greeting__name") as HTMLParagraphElement;

  const [hours, minutes] = getCurrentTime();
  greetingTime.innerHTML = `${hours}:${minutes}`;

  const greetingPhrase: string = `Hello, dear User`;
  greetingName.innerHTML = greetingPhrase;

}

export default setGreeting;