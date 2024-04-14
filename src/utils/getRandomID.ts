const getRandomID = (): string => {
  let randomID: string = Math.floor(Math.random() * 10000) + (Math.random() * 100).toString(36);
  randomID = randomID.replace(".", `${Math.floor(Math.random() * 10)}`);

  return randomID;
};

export default getRandomID;
