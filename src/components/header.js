import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <span>D&D Initiative Tracker</span>
        <span>{'Round ' + this.props.round}</span>
      </header>
    );
  }
}
