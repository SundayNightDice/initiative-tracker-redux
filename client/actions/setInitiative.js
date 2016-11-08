export default (encounterId, id, initiative) => ({
  type: 'SET_INITIATIVE',
  encounterId: encounterId,
  id: id,
  initiative: Number(initiative)
});
