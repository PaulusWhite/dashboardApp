const getTodayDate = (): string => {
  const today = new Date();

  const dd: string = String(today.getDate()).padStart(2, "0");
  const mm: string = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy: number = today.getFullYear();

  const date: string = `${yyyy}-${mm}-${dd}`;

  return date;
};

export default getTodayDate;
