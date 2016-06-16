import { push } from 'react-router-redux'

export default (encounterId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ENEMIES_ADDED',
      encounterId: encounterId
    });
    dispatch(push('/'));
  }
}
