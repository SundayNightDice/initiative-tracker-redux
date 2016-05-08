export default function setDamage(value, encounterId) {
  return {
    type: 'SET_DAMAGE',
    value: Number(value),
    encounterId: encounterId
  };
}
