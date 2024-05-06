//interfaces
import { IError } from "../../interfaces/IError";

const getErrorData = (error: Error, description: string): IError => {
  return {
    name: error.name,
    message: error.message,
    description,
  };
};

export default getErrorData;
