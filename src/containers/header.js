import { connect } from 'react-redux';
import Header from './../components/header';
import getActiveEncounter from './../selectors/getActiveEncounter';

const mapStateToProps = (state) => {
  const activeEncounter = getActiveEncounter(state);
  return {
    round: activeEncounter[1] ? activeEncounter[1].round : null
  }
};

const HeaderBar = connect(
  mapStateToProps,
  null
)(Header);

export default HeaderBar;
