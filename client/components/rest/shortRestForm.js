import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

const ShortRest = (props) => (
  <form className="shortRest" onSubmit={props.handleSubmit}>
    <div>
      <p>{props.con}</p>
      <p className="d">CON mod</p>
    </div>
    <div>+</div>
    <div>
      <p>
        <Field name="healing" component="input" type="number" min="1" max={props.hitDie} />
      </p>
      <p className="d">{`d${props.hitDie}`}</p>
    </div>
    <div>=</div>
    <div>
      <p>{props.total}</p>
      <p className="d">Total</p>
    </div>
    <div>
      <button type="submit">Spend Hit Die</button>
    </div>
  </form>
);

const S = connect(
  (state, ownProps) => ({
    total: formValueSelector(ownProps.form)(state, 'healing') + ownProps.con
  })
)(ShortRest);

const ShortRestForm = reduxForm({
  initialValues: {
    'healing': 1
  }
})(S);

export default ShortRestForm;
