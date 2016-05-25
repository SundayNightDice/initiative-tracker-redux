export default function closeEncounter(reason, encounterId) {
  return {
    type: 'CLOSE_ENCOUNTER',
    reason: reason,
    encounterId: encounterId
  }
}
