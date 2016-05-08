export default function deathFail(value, encounterId) {
  return {
    type: 'DEATH_FAIL',
    value: value,
    encounterId: encounterId
  };
}
