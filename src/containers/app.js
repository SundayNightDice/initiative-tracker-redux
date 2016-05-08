import { connect } from 'react-redux';

import App from './../components/app';
import getActiveEncounter from './../selectors/getActiveEncounter';

const mapStateToProps = (state) => {
  const activeEncounter = getActiveEncounter(state);
  return {
    id: activeEncounter[0],
    encounter: activeEncounter[1]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
