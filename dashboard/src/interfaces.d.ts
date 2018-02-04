interface IReduxAction {
  type: string;
  payload?: object;
}

interface IReducerState {
  loading: boolean;
  data: any[];
}

interface IUserReducerState {
  user: object;
  loading: boolean;
  isAuthenticated: boolean,
}
