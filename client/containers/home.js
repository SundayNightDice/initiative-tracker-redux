import { connect } from 'react-redux';

import addEncounter from './../actions/addEncounter';
import addPlayer from './../actions/addPlayer';
import deletePlayer from './../actions/deletePlayer';
import deleteEncounter from './../actions/deleteEncounter';
import editEncounter from './../actions/editEncounter';
import startEncounter from './../actions/startEncounter';

import Home from './../components/home/home';

const mapStateToProps = (state) => {
  return {
    encounters: state.encounters,
    players: state.players,
    ui: state.ui
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEncounter: (e) => dispatch(addEncounter(e)),
    onAddPlayer: (p) => dispatch(addPlayer(p)),
    onDeletePlayer: (id) => dispatch(deletePlayer(id)),
    onDeleteEncounter: (id) => dispatch(deleteEncounter(id)),
    onEditEncounter: (id) => dispatch(editEncounter(id)),
    onStartEncounter: (id) => dispatch(startEncounter(id))
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
