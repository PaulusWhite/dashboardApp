//Interfaces
import { IQuotationData } from "../interfaces/IAPI";

const URL = "https://api.quotable.io/quotes/random?maxLength=140";

const getRandomQuotation = async <T extends IQuotationData>(): Promise<T> => {
  const response: Response = await fetch(URL);
  const data = await response.json();
  const quotationData: T = data[0];

  return quotationData;
};

export default getRandomQuotation;
