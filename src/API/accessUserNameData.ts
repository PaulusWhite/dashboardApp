const USER_NAME_KEY: string = "user-name";

const getUserNameData = (): string | null => {
  const userName: string | null = localStorage.getItem(USER_NAME_KEY);

  return userName;
};

const setUserNameData = (name: string): void => {
  localStorage.setItem(USER_NAME_KEY, name);
};

export { getUserNameData, setUserNameData };
