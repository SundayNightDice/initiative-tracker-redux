export default function dealDamage(encounterId) {
  return {
    type: 'DEAL_HEALING',
    encounterId: encounterId
  };
}
