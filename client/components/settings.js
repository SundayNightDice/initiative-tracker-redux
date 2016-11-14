import React from 'react';
import license from '../data/license';

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

export default Settings;
