export default (formData, playerId) => ({
  type: 'SPEND_HIT_DIE',
  playerId: playerId,
  value: formData.healing
});
