//store
import store from "../../model/store";

//Actions
import { createAsyncSetRandomQuotationAction } from "../../model/asyncActionCreators";

//Interfaces
import { IQuotationData } from "../../interfaces/IAPI";

//Components
import Quotation from "../../view/components/mainPage/Quotation";

const setRandomQuotation = async () => {
  let quotation: IQuotationData | null = store.getState().quotation;

  if (!quotation) {
    try {
      await createAsyncSetRandomQuotationAction();

      quotation = store.getState().quotation as IQuotationData;
    } catch (err: unknown) {
      console.log(err);
    }
  }

  if (!quotation) return;

  const quotationField: HTMLDivElement = document.querySelector(".main .quotation")!;
  quotationField.innerHTML = Quotation(quotation.content, quotation.author);
};

export default setRandomQuotation;
