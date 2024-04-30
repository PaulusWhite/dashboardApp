//store
import store from "../model/store";

//modules
import displayComponent from "../modules/common/displayComponent";
import setGreeting from "./mainPage/setGreeting";

//Utils
import getCurrentURLPath from "../utils/getCurrentURLPath";

//actionCreators
import { createSettingUserNameAction } from "../model/actionCreators";

const getInputFieldElements = () => {
  const userNameInputWindow: HTMLElement = document.querySelector(".username-input-window")!;
  const input: HTMLInputElement = document.querySelector("#username-input")!;
  const okBtn: HTMLButtonElement = document.querySelector(".username-input-window__okBtn")!;

  return { userNameInputWindow, input, okBtn };
};

const applyUserName = (): void => {
  const { userNameInputWindow, input, okBtn } = getInputFieldElements();
  const currentURLPath: string = getCurrentURLPath();

  let userNameValue: string = input.value.trim();
  userNameValue = userNameValue ? userNameValue : "Buddy";

  store.dispatch(createSettingUserNameAction(userNameValue));

  window.removeEventListener("keydown", applyUserNameWithKeyboard);
  okBtn.removeEventListener("click", applyUserName);

  if (currentURLPath === "/") setGreeting();

  displayComponent(userNameInputWindow, false, 500);
};

const applyUserNameWithKeyboard = (event: KeyboardEvent): void => {
  const { input } = getInputFieldElements();

  if (input !== document.activeElement) return;

  if (event.code === "Enter" || event.code === "NumpadEnter") applyUserName();
};

const setUserName = (): void => {
  const currentUserName: string | null = store.getState().userName;

  if (currentUserName) return;

  const { userNameInputWindow, input, okBtn } = getInputFieldElements();

  displayComponent(userNameInputWindow, true, 500);

  input.focus();

  okBtn.addEventListener("click", applyUserName);
  window.addEventListener("keydown", applyUserNameWithKeyboard);
};

export default setUserName;
