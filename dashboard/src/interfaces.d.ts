interface IReduxAction {
  type: string;
  payload?: object;
}

interface IReducerState {
  loading: boolean;
  data: any[];
}
