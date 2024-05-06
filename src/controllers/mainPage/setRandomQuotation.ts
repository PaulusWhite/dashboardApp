//store
import store from "../../model/store";

//Actions
import { createAsyncSetRandomQuotationAction } from "../../model/asyncActionCreators";

//Interfaces
import { IQuotationData } from "../../interfaces/IAPI";

//Components
import Quotation from "../../view/components/mainPage/Quotation";

const setRandomQuotation = async () => {
  const quotationField: HTMLDivElement = document.querySelector(".main .quotation")!;
  let quotation: IQuotationData | null = store.getState().quotation;

  if (!quotation) {
    try {
      await createAsyncSetRandomQuotationAction();

      quotation = store.getState().quotation as IQuotationData;
    } catch (err) {
      throw new Error("error from SetRandomQuotation");
    }
  }

  quotationField.innerHTML = Quotation(quotation.content, quotation.author);
};

export default setRandomQuotation;
