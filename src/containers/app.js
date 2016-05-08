import { connect } from 'react-redux';

import App from './../components/app';

const mapStateToProps = (state) => {
  const id = 'ENC1';
  return {
    id: id,
    status: state.encounters.get(id).status
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
