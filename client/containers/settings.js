import { connect } from 'react-redux';

import clearPersistence from '../actions/clearPersistence';
import hideSettings from '../actions/hideSettings';
import Settings from '../components/settings';

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClearPersistence: () => dispatch(clearPersistence()),
    onDone: () => dispatch(hideSettings())
  };
};

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
