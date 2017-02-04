import React from 'react';
import { connect } from 'react-redux';

import clearPersistence from '../../actions/clearPersistence';
import hideSettings from '../../actions/hideSettings';
import license from '../../data/license';

const Settings = (props) => {
  return (
    <div className="settings-content">
      <h2>Settings</h2>
      <button onClick={props.onClearPersistence}>Delete Data</button>
      <h3>License</h3>
      <textarea className="license" readOnly value={license.join('\n')} />
      <button
        className="done"
        onClick={() => props.onDone()}>Done</button>
    </div>
  );
}

const SettingsContainer = connect(
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({
    onClearPersistence: () => dispatch(clearPersistence()),
    onDone: () => dispatch(hideSettings())
  })
)(Settings);

export default SettingsContainer;
