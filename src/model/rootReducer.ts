//interfaces
import { TState, IAction } from "../interfaces/IModel";

//action types
import { INIT, SET_USER_NAME } from "./actionTypes";

const rootReducer = <T>(state: TState, action: IAction<T>): TState => {
  if (action.type === INIT) return state;

  if (action.type === SET_USER_NAME) {
    const userName: string = action.type as string;
    state = { ...state, userName };
  }

  return state;
};

export default rootReducer;
