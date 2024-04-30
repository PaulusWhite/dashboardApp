//interfaces
import { TState, IAction } from "../interfaces/IModel";

//action types
import { INIT } from "./action";

const rootReducer = <T>(state: TState, action: IAction<T>): TState => {
  if (action.type === INIT) return state;

  return state;
};

export default rootReducer;
