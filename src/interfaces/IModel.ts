type TState = {
  userName: string | null;
};

interface IAction<T> {
  type: string;
  payload?: T;
}

interface IStore {
  dispatch: <T>(action: IAction<T>) => void;
  subscribe: (callback: CallableFunction) => void;
  getState: () => TState;
}

export { IStore, TState, IAction };
