import uuid from 'node-uuid';
import { push } from 'react-router-redux'

export default () => {
  return (dispatch, getState) => {
    const id = uuid.v4();

    dispatch({
      type: 'ADD_ENCOUNTER',
      id: id
    });

    dispatch(push(`/build/${id}`));
  }
}
