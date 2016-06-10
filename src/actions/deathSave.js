export default function deathSave(formData, encounterId) {
  return {
    type: 'DEATH_SAVE',
    formData: formData,
    encounterId: encounterId
  };
}
