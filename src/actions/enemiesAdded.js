export default function startEncounter(encounterId) {
  return {
    type: 'ENEMIES_ADDED',
    encounterId: encounterId
  };
}
