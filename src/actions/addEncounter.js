import uuid from 'node-uuid';

export default () => ({
  type: 'ADD_ENCOUNTER',
  id: uuid.v4()
})
