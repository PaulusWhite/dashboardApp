const getCurrentTime = (): [number, number, number] => {
  const date = new Date();

  const hours: number = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return [hours, minutes, seconds];
}

export default getCurrentTime;