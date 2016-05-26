let count = 0;

export default function addPlayer() {
  const id = `ENC${count}`;
  count++;
  return {
    type: 'ADD_ENCOUNTER',
    id: id
  }
}
