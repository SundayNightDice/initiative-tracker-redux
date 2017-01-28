import React from 'react';

const ActivityLog = (props) => (
  <div>
    <h2>Log</h2>
    <ul>
      { props.log.map((item, index) => <li key={index}>{item}</li>) }
    </ul>
  </div>
);

export default ActivityLog;
