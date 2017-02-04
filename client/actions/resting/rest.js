import { push } from 'react-router-redux';

export default () => {
  return (dispatch, getState) => {
    dispatch(push('/rest'));
  }
}
