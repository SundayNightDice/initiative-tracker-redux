import { connect } from 'react-redux';

import App from './../components/app';
import getActiveEncounter from './../selectors/getActiveEncounter';
import closeEncounter from './../actions/closeEncounter';

const mapStateToProps = (state) => {
  const activeEncounter = getActiveEncounter(state);
  return {
    id: activeEncounter[0],
    encounter: activeEncounter[1]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseEncounter: (id) => dispatch(closeEncounter('complete', id))
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
