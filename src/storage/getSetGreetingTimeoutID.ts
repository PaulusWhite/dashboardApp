const GREETING_TIMEOUT_KEY = "greeting-timeout-id";

const setGreetingTimeoutID = (greetingID: NodeJS.Timeout) => {
  sessionStorage.setItem(GREETING_TIMEOUT_KEY, `${greetingID}`);
};

const getGreetingTimeoutID = (): string => {
  return String(sessionStorage.getItem(GREETING_TIMEOUT_KEY));
};

export { setGreetingTimeoutID, getGreetingTimeoutID };
