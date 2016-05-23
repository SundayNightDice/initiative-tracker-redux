import React from 'react';

const ThreeChanceButtons = (props) => (
  <p>
    <span>{props.title}</span>
    <input
      type="checkbox"
      disabled={props.value !== 0}
      checked={props.value === 0 ? props.checked : true}
      onClick={props.onChange} />
    <input
      type="checkbox"
      disabled={props.value !== 1}
      checked={props.value === 1 ? props.checked : props.value > 1}
      onClick={props.onChange} />
    <input
      type="checkbox"
      disabled={props.value !== 2}
      checked={props.value === 2 ? props.checked : false}
      onClick={props.onChange} />
  </p>
);

ThreeChanceButtons.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.number,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

ThreeChanceButtons.defaultProps = {
  title: '',
  value: 0,
  checked: false,
  onChange: () => {}
};

export default ThreeChanceButtons;
