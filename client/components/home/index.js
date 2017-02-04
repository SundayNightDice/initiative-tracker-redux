import { connect } from 'react-redux';

import addEncounter from '../../actions/addEncounter';
import addPlayer from '../../actions/addPlayer';
import deletePlayer from '../../actions/deletePlayer';
import deleteEncounter from '../../actions/deleteEncounter';
import editEncounter from '../../actions/editEncounter';
import rest from '../../actions/resting/rest';
import startEncounter from '../../actions/startEncounter';
import toggleAddPlayer from '../../actions/toggleAddPlayer';

import Home from './home';

const HomeContainer = connect(
  (state, ownProps) => ({
    classes: state.classes,
    encounters: state.encounters,
    players: state.players,
    races: state.races,
    ui: state.ui.home
  }),
  (dispatch) => ({
    onAddEncounter: (e) => dispatch(addEncounter(e)),
    onAddPlayer: (p) => dispatch(addPlayer(p)),
    onDeletePlayer: (id) => dispatch(deletePlayer(id)),
    onDeleteEncounter: (id) => dispatch(deleteEncounter(id)),
    onEditEncounter: (id) => dispatch(editEncounter(id)),
    onRest: () => dispatch(rest()),
    onStartEncounter: (id) => dispatch(startEncounter(id)),
    onToggleAddPlayer: (isOpen) => dispatch(toggleAddPlayer(isOpen))
  })
)(Home);

export default HomeContainer;
