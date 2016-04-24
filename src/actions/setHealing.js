export default function setDamage(value) {
  return {
    type: 'SET_HEALING',
    value: Number(value)
  };
}
