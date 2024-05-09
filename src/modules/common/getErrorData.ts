//interfaces
import { IError } from "../../interfaces/Icommon";

const getErrorData = (error: Error, description: string): IError => {
  return {
    name: error.name,
    message: error.message,
    description,
  };
};

export default getErrorData;
