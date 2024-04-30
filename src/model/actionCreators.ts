//interfaces
import { IAction } from "../interfaces/IModel";

//storate
import { setLSUserName } from "../storage/getSetUserName";

//Actions Types
import { SET_USER_NAME } from "./actionTypes";

const createSettingUserNameAction = <T>(userName: string): IAction<T> => {
  setLSUserName(userName); //setting value in localStorage

  return {
    type: SET_USER_NAME,
    payload: userName as T,
  };
};

export { createSettingUserNameAction };
