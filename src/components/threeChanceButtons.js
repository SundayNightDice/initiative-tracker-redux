import React from 'react';

const ThreeChanceButtons = (props) => {
  const formProps1 = props.value === 0 ? props.formProps : {};
  const formProps2 = props.value === 1 ? props.formProps : {};
  const formProps3 = props.value === 2 ? props.formProps : {};

  return (
  <p>
    <span>{props.title}</span>
    <input
      type="checkbox"
      disabled={props.value !== 0 || props.disabled}
      checked={props.value === 0 ? props.checked : true}
      onClick={props.onChange}
      {...formProps1} />
    <input
      type="checkbox"
      disabled={props.value !== 1 || props.disabled}
      checked={props.value === 1 ? props.checked : props.value > 1}
      onClick={props.onChange}
      {...formProps2} />
    <input
      type="checkbox"
      disabled={props.value !== 2 || props.disabled}
      checked={props.value === 2 ? props.checked : false}
      onClick={props.onChange}
      {...formProps3} />
  </p>)
};

ThreeChanceButtons.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.number,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  disabled: React.PropTypes.bool
};

ThreeChanceButtons.defaultProps = {
  title: '',
  value: 0,
  checked: false,
  onChange: () => {},
  disabled: false
};

export default ThreeChanceButtons;
