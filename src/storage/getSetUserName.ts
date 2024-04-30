const USER_NAME_KEY: string = "user-name";

const getLSUserName = (): string | null => {
  const userName: string | null = localStorage.getItem(USER_NAME_KEY);

  return userName;
};

const setLSUserName = (name: string): void => {
  localStorage.setItem(USER_NAME_KEY, name);
};

export { getLSUserName, setLSUserName };
