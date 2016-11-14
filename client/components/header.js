import React from 'react';

const Header = (props) => (
  <header>
    <span className="logo">D&D Initiative Tracker</span>
    { props.round > 0 ? <span>{'Round ' + props.round}</span> : <span>Encounter Setup</span> }
    <div className="settings" onClick={props.onShowSettings}></div>
  </header>
);

export default Header;
