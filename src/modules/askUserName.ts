//storage modules
import { getUserName, setUserName } from "../storage/getSetUserName";

//modules
import setGreeting from "./mainPage/setGreeting";
import displayComponent from "./common/displayComponents";

const displayNameInputWindow = (flag: boolean) => {
  const userNameInputWindow: HTMLElement = document.querySelector(".username-input-window") as HTMLElement;

  displayComponent(userNameInputWindow, flag, 500);
}

const applyUserName = (input: HTMLInputElement) => {
  let userNameValue: string = input.value.trim();
  userNameValue = userNameValue ? userNameValue : "Buddy";

  setUserName(userNameValue);
  setGreeting();
  displayNameInputWindow(false);

  window.removeEventListener("keydown", applyUserNameWithKeyboard)
}

const applyUserNameWithKeyboard = (Event: KeyboardEvent) => {
  const input: HTMLInputElement = document.querySelector("#username-input") as HTMLInputElement;

  if(input !== document.activeElement) return;

  if(Event.code === "Enter" || Event.code === "NumpadEnter") applyUserName(input);
}

const askUserName = (): void => {
  const userName: string | null = getUserName();

  if(userName) return;

  displayNameInputWindow(true);
  
  const input: HTMLInputElement = document.querySelector("#username-input") as HTMLInputElement;
  const okBtn: HTMLButtonElement = document.querySelector(".username-input-window__okBtn") as HTMLButtonElement;

  input.focus();

  okBtn.addEventListener("click", () => applyUserName(input));

  window.addEventListener("keydown", applyUserNameWithKeyboard);
}

export default askUserName;