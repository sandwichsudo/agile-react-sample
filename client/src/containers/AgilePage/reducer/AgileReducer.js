import { actionTypes } from '../AgileConstants';

const initialState = {
  results: [],
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return { ...state, results: action.items };
    }
    case actionTypes.REQUEST_COMPLETE: {
      const results = state.results.map(value => Object.assign({}, value));
      return { ...state, error: action.error, loading: false, results };
    }
    case actionTypes.REQUEST_START: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
