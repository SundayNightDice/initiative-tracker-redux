import { goBack } from 'react-router-redux';

export default () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'HIDE_SETTINGS'
    });

    dispatch(goBack());
  }
}
