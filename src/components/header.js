import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <span>D&D Initiative Tracker</span>
        { this.props.round > 0 ? <span>{'Round ' + this.props.round}</span> : <span>Encounter Setup</span> }
      </header>
    );
  }
}
