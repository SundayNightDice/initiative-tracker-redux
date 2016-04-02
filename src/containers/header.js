import { connect } from 'react-redux';
import Header from './../components/header';

const mapStateToProps = (state) => {
  return {
    round: state.encounter.round
  }
};

const HeaderBar = connect(
  mapStateToProps,
  null
)(Header);

export default HeaderBar;
