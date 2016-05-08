let count = 1; // Should be 0, is not because 1 is hard-coded!

export default function addPlayer() {
  count++;
  const id = `ENC${count}`;
  return {
    type: 'ADD_ENCOUNTER',
    id: id
  }
}
