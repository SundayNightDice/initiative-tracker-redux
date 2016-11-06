export default (playerId) => {
  return {
    type: 'DELETE_PLAYER',
    playerId: playerId
  }
}
