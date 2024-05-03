//Reducer
import rootReducer from "./rootReducer";

//interfaces
import { IStore, IAction, TState } from "../interfaces/IModel";

//storage modules
import { getUserNameData } from "../API/accessUserNameData";

//ActionTypes
import { INIT } from "./actionTypes";

//Controllers
import { getTodoListsData } from "../API/accessTodoListsData";

const createStore = (): IStore => {
  const initState: TState = {
    userName: getUserNameData(),
    todo: getTodoListsData(),
    userWeatherForecast: null,
    isPreloader: false,
  };

  let state = rootReducer(initState, { type: INIT });
  const subscribers: CallableFunction[] = [];

  return {
    dispatch<T>(action: IAction<T>) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber: CallableFunction) => subscriber());
    },

    subscribe(callback: CallableFunction) {
      subscribers.push(callback);
    },

    getState() {
      return state;
    },
  };
};

const store: IStore = createStore();

export default store;
