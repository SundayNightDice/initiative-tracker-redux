import React from 'react';

export default class AddPlayer extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="row">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div class="row">
          <label>HP:</label>
          <input type="number" />
        </div>
        <div class="row">
          <label>Initiative Bonus:</label>
          <input type="number" />
        </div>
        <input type="submit" value="Add" disabled={true} />
      </form>
    );
  }

  onSubmit() {
    console.log('wahey');
  }
}
