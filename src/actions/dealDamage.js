export default function dealDamage(encounterId) {
  return {
    type: 'DEAL_DAMAGE',
    encounterId: encounterId
  };
}
