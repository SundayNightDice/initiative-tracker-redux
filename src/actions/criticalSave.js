export default function criticalSave(value, encounterId) {
  return {
    type: 'CRITICAL_SAVE',
    value: value,
    encounterId: encounterId
  };
}
