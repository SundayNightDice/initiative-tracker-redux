import React from 'react';
import { Field } from 'redux-form';

const ThreeChanceButtons = (props) => {
  const button1Name = props.value === 0 ? props.name : `${props.name}1`;
  const button2Name = props.value === 1 ? props.name : `${props.name}2`;
  const button3Name = props.value === 2 ? props.name : `${props.name}3`;

  return (
  <p>
    <span>{props.title}</span>
    <Field
      name={button1Name}
      type="checkbox"
      disabled={props.value !== 0 || props.disabled}
      checked={props.value === 0 ? props.checked : true}
      onClick={props.onChange}
      component="input" />
    <Field
      name={button2Name}
      type="checkbox"
      disabled={props.value !== 1 || props.disabled}
      checked={props.value === 1 ? props.checked : props.value > 1}
      onClick={props.onChange}
      component="input" />
    <Field
      name={button3Name}
      type="checkbox"
      disabled={props.value !== 2 || props.disabled}
      checked={props.value === 2 ? props.checked : false}
      onClick={props.onChange}
      component="input" />
  </p>);
};

ThreeChanceButtons.propTypes = {
  name: React.PropTypes.string.isRequired,
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
