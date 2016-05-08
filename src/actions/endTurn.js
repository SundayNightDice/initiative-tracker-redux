export default function endTurn(encounterId) {
  return {
    type: 'END_TURN',
    encounterId: encounterId
  };
}
