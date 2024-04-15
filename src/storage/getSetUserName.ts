const USER_NAME_KEY: string = "user-name";

const getUserName = (): string | null => {
  const userName: string | null = localStorage.getItem(USER_NAME_KEY);

  return userName;
};

const setUserName = (name: string) => {
  localStorage.setItem(USER_NAME_KEY, name);
};

export { getUserName, setUserName };
