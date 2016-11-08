import { push } from 'react-router-redux'

export default (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'EDIT_ENCOUNTER',
      id: id
    });

    dispatch(push(`/build/${id}`));
  }
}
