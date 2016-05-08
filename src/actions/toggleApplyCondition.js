export default function toggleApplyCondition(checked, encounterId) {
  return {
    type: 'TOGGLE_APPLY_CONDITION',
    checked: checked,
    encounterId: encounterId
  };
}
