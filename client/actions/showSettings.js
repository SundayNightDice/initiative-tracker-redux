import { push } from 'react-router-redux';

export default () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SHOW_SETTINGS'
    });

    dispatch(push(`/settings`));
  }
}
