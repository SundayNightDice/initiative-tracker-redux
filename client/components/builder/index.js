import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import addEnemy from '../../actions/addEnemy'
import onBack from '../../actions/back';;
import changeEnemy from '../../actions/changeEnemy';
import deleteEnemy from '../../actions/deleteEnemy';
import enemiesAdded from '../../actions/enemiesAdded';
import setEncounterName from '../../actions/setEncounterName';
import EncounterBuilder from './encounterBuilder';
import { getEncounter, getMonsters, getSelectedMonster, getEnemiesAsMonsters } from '../../selectors/getSelectedMonster';

const EncounterBuilderContainer = connect(
  (state, ownProps) => {
    const encounter = getEncounter(state, ownProps.params.id);
    const monsters = getMonsters(state);
    return {
      enemies: getEnemiesAsMonsters(encounter, monsters).entrySeq(),
      monsters: monsters.entrySeq(),
      name: encounter.name,
      selectedMonster: getSelectedMonster(state)
    };
  },
  (dispatch, ownProps) => ({
    onBack: () => dispatch(onBack()),
    onSetEncounterName: (e) => dispatch(setEncounterName(ownProps.params.id, e.target.value)),
    onChangeEnemy: (data) => dispatch(changeEnemy(data)),
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy, ownProps.params.id)),
    onDeleteEnemy: (id) => dispatch(deleteEnemy(ownProps.params.id, id)),
    onDone: () => dispatch(enemiesAdded(ownProps.params.id))
  })
)(EncounterBuilder);

export default EncounterBuilderContainer;
