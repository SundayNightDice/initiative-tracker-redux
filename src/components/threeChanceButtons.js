import React from 'react';

export default class ThreeChanceButtons extends React.Component {

  render() {
    return (
      <p>
        <span>{this.props.title}</span>
        <input type="checkbox"
          disabled={this.props.value !== 0}
          checked={this.props.value === 0 ? this.props.checked : true}
          onClick={this.props.onChange} />
        <input type="checkbox"
          disabled={this.props.value !== 1}
          checked={this.props.value === 1 ? this.props.checked : this.props.value > 1}
          onClick={this.props.onChange} />
        <input type="checkbox"
          disabled={this.props.value !== 2}
          checked={this.props.value === 2 ? this.props.checked : false}
          onClick={this.props.onChange} />
      </p>
    );
  }
}

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
