import { connect } from 'react-redux';

import addEncounter from './../actions/addEncounter';
import addPlayer from './../actions/addPlayer';

import Home from './../components/home';

const mapStateToProps = (state) => {
  return {
    encounters: state.encounters,
    players: state.players
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEncounter: (e) => dispatch(addEncounter(e)),
    onAddPlayer: (p) => dispatch(addPlayer(p))
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
