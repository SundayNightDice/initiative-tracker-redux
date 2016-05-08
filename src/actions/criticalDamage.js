export default function criticalDamage(value, encounterId) {
  return {
    type: 'CRITICAL_DAMAGE',
    value: value,
    encounterId: encounterId
  };
}
