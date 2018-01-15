const initialState = [];

const courses = (state = initialState, action: IReduxAction = { type: '', payload: {} }) => {
  const { type, payload } = action;
  
  switch (type) {
    default: return state;
  }
};

export default courses;
