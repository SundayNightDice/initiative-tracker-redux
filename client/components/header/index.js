import React from 'react';
import { connect } from 'react-redux';

import showSettings from '../../actions/showSettings';
import getActiveEncounter from '../../selectors/getActiveEncounter';

const Header = (props) => (
  <header>
    <span className="logo">D&D Initiative Tracker</span>
    { props.round > 0 ? <span>{'Round ' + props.round}</span> : <span>Encounter Setup</span> }
    <div className="settings" onClick={props.onShowSettings}></div>
  </header>
);


const HeaderBar = connect(
  (state, ownProps) => {
    const activeEncounter = getActiveEncounter(state);
    return {
      round: activeEncounter[1] ? activeEncounter[1].round : null
    }
  },
  (dispatch) => ({
    onShowSettings: () => dispatch(showSettings())
  })
)(Header);

export default HeaderBar;
