export default function setDamage(value, encounterId) {
  return {
    type: 'SET_HEALING',
    value: Number(value),
    encounterId: encounterId
  };
}
