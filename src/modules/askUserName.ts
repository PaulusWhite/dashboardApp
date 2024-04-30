//storage modules
import { getUserName, setUserName } from "../storage/getSetUserName";

//modules
import setGreeting from "./mainPage/setGreeting";
import displayComponent from "./common/displayComponent";

const displayNameInputWindow = (flag: boolean): void => {
  const userNameInputWindow: HTMLElement = document.querySelector(".username-input-window")!;

  displayComponent(userNameInputWindow, flag, 500);
};

const applyUserName = (input: HTMLInputElement): void => {
  let userNameValue: string = input.value.trim();
  userNameValue = userNameValue ? userNameValue : "Buddy";

  setUserName(userNameValue);
  setGreeting();
  displayNameInputWindow(false);

  window.removeEventListener("keydown", applyUserNameWithKeyboard);
};

const applyUserNameWithKeyboard = (Event: KeyboardEvent): void => {
  const input: HTMLInputElement = document.querySelector("#username-input")!;

  if (input !== document.activeElement) return;

  if (Event.code === "Enter" || Event.code === "NumpadEnter") applyUserName(input);
};

const askUserName = (): void => {
  const userName: string | null = getUserName();

  if (userName) return;

  displayNameInputWindow(true);

  const input: HTMLInputElement = document.querySelector("#username-input")!;
  const okBtn: HTMLButtonElement = document.querySelector(".username-input-window__okBtn")!;

  input.focus();

  okBtn.addEventListener("click", () => applyUserName(input));

  window.addEventListener("keydown", applyUserNameWithKeyboard);
};

export default askUserName;
