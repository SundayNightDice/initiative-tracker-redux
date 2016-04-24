export default function setDamage(value) {
  return {
    type: 'SET_DAMAGE',
    value: Number(value)
  };
}
