import agileService from '../../../services/agile/agileService';
import { actionTypes } from '../AgileConstants';

export const fetchResults = () => async (dispatch) => {
  let error = '';
  dispatch({
    type: actionTypes.REQUEST_START,
  });
  try {
    const { results } = await agileService.resultSearch();
    dispatch({
      type: actionTypes.UPDATE_RESULTS,
      items:results,
    });
  }
  catch ({ message }) {
    error = message;
  }
  dispatch({
    type: actionTypes.REQUEST_COMPLETE,
    error,
  });
};
