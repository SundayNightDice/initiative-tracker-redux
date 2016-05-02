import { connect } from 'react-redux';

import App from './../components/app';

const mapStateToProps = (state) => {
  return {
    status: state.encounter.status
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
