//API
import getRandomQuotation from "../../API/getRandomQuotation";

//Interfaces
import { IError } from "../../interfaces/Icommon";
import { IQuotationData } from "../../interfaces/IAPI";
import IPromiseValue from "../../interfaces/IPromise";

//Modules
import getErrorData from "../../modules/common/getErrorData";

const getRandomQuotationData = async (): Promise<IPromiseValue> => {
  try {
    const quotationData: IQuotationData = await getRandomQuotation();
    return {
      dataType: "quotation",
      data: quotationData,
    };
  } catch (err: unknown) {
    const errorDescription: string = `The quotation was not gotten. Reason: ${(err as Error).name}`;
    const errorData: IError = getErrorData(err as Error, errorDescription);

    throw errorData;
  }
};

export default getRandomQuotationData;
