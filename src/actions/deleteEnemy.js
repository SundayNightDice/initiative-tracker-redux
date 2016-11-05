export default (encounterId, enemyId) => {
  return {
    type: 'DELETE_ENEMY',
    encounterId: encounterId,
    enemyId: enemyId
  }
}
