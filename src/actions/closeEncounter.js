import { push } from 'react-router-redux'

export default (reason, encounterId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_ENCOUNTER',
      reason: reason,
      encounterId: encounterId
    });
    dispatch(push('/'));
  }
}
