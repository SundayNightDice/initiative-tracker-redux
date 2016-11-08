export default function toggleCondition(condition, checked, encounterId) {
  return {
    type: 'TOGGLE_CONDITION',
    condition: condition,
    checked: checked,
    encounterId: encounterId
  };
}
