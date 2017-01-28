export default function dealHealing(healData, encounterId) {
  return {
    type: 'DEAL_HEALING',
    encounterId: encounterId,
    healing: {
      target: healData.target,
      value: Number(healData.healing)
    }
  };
}
