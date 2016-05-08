export default function setTarget(target, encounterId) {
  return {
    type: 'SET_HEALING_TARGET',
    target: target,
    encounterId: encounterId
  };
}
