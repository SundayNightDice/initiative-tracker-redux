import React from 'react';

export default class TargetValueSelector extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <select value={this.props.target}
          onChange={this.props.onTargetSelected}>
          {
            this.props.targets.map(t =>
              <option value={t.name}>{t.name}</option>
            )
          }
        </select>
        <span>For:</span>
        <input type="number"
          min="0"
          max="100"
          value={this.props.value}
          onChange={this.props.onChange} />
      </div>
    )
  }
}
