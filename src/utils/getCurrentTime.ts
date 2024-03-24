const convertTimeData = (value: number): string => {
  return `${value}`.length === 1 ? `0${value}` : `${value}`;
}

const getCurrentTime = (): [string, string, string] => {
  const date = new Date();

  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();
  let seconds: number | string = date.getSeconds();

  hours = `${hours}`;
  minutes = convertTimeData(minutes);
  seconds = convertTimeData(seconds);

  return [hours, minutes, seconds];
}

export default getCurrentTime;