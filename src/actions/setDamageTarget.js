export default function setTarget(target, encounterId) {
  return {
    type: 'SET_DAMAGE_TARGET',
    target: target,
    encounterId: encounterId
  };
}
