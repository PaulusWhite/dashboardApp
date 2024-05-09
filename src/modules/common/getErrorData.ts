//interfaces
import { IError } from "../../interfaces/Icommon";

const getErrorData = (error: IError, description: string): IError => {
  return {
    name: error.name,
    message: error.message,
    description,
    code: error.code,
  };
};

export default getErrorData;
