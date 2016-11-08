export default function dealDamage(damageData, encounterId) {
  return {
    type: 'DEAL_DAMAGE',
    encounterId: encounterId,
    attack: {
      target: damageData.target,
      isCritical: Boolean(damageData.isCritical),
      damage: Number(damageData.damage)
    }
  };
}
