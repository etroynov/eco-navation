import { RECEIVE_ORGANIZATION_EMPLOYERS } from '../actions/types';

const initialState = {
  employers: []
};

const users = (state = initialState, action: IReduxAction = { type: '', payload: {} }) => {
  const { type, payload } = action;

  console.info(action);

  switch (type) {
    case RECEIVE_ORGANIZATION_EMPLOYERS: return {
      ...state,
      employers: payload,
    };

    default: return state;
  }
};

export default users;
