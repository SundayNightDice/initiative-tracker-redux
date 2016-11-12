import { reset } from 'redux-form';

export default (encounterId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'END_TURN',
      encounterId: encounterId
    });
    dispatch(reset('turnDamage'));
    dispatch(reset('turnHealing'));
  }
}
