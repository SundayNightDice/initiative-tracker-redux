import React from 'react';
import { Field } from 'redux-form';

const ThreeChanceButtons = (props) => (
  <p>
    <span>{props.title} ({props.value})</span>
    <Field
      name={props.name}
      type="checkbox"
      disabled={props.disabled}
      onClick={props.onChange}
      component="input" />
  </p>
);

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
