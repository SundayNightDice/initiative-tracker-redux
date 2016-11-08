import { change } from 'redux-form';

export default (data) => {
  return (dispatch, getState) => {
    const value = data.target.value;
    dispatch(change('addEnemy', 'monster', value));

    const monsterName = getState().monsters.get(value).name;
    dispatch(change('addEnemy', 'name', monsterName));
  }
}
