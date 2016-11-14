import { connect } from 'react-redux';
import showSettings from '../actions/showSettings';
import Header from './../components/header';
import getActiveEncounter from './../selectors/getActiveEncounter';

const mapStateToProps = (state, ownProps) => {
  const activeEncounter = getActiveEncounter(state);
  return {
    round: activeEncounter[1] ? activeEncounter[1].round : null
  }
};

const mapDispatchToProps = (dispatch) => ({
  onShowSettings: () => dispatch(showSettings())
});

const HeaderBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderBar;
