const convertTempCelsius = (initValue: number): number => {
  return Math.ceil((Math.ceil(initValue) - 32) / 1.8);
};

export default convertTempCelsius;
