import React from 'react';

const TargetValueSelector = (props) => (
  <div>
    <h2>{props.title}</h2>
    <select
      value={props.target}
      onChange={props.onTargetSelected}>
        {
          props.targets.map(t =>
            <option value={t} key={t}>{t}</option>
          )
        }
    </select>
    <span>For:</span>
    <input
      type="number"
      min="0"
      max="100"
      value={props.value}
      onChange={props.onChange} />
  </div>
);

export default TargetValueSelector;
