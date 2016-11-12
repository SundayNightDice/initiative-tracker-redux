import { reset } from 'redux-form';

export default (formData, encounterId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DEATH_SAVE',
      formData: formData,
      encounterId: encounterId
    });
    dispatch(reset('deathSaves'));
  }
}
