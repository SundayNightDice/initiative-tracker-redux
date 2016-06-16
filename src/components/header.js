import React from 'react';

const Header = (props) => (
  <header>
    <span className="logo">D&D Initiative Tracker</span>
    { props.round > 0 ? <span>{'Round ' + props.round}</span> : <span>Encounter Setup</span> }
  </header>
);

export default Header;
