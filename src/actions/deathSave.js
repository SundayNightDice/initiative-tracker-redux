export default function deathSave(value, encounterId) {
  return {
    type: 'DEATH_SAVE',
    value: value,
    encounterId: encounterId
  };
}
