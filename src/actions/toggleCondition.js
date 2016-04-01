export default function toggleCondition(condition, checked) {
  return {
    type: 'TOGGLE_CONDITION',
    condition: condition,
    checked: checked
  };
}
