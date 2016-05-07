import React from 'react';

export default class EncounterBuilder extends React.Component {

  constructor() {
    super();
    this.addEnemy = this.addEnemy.bind(this);
    this.start = this.start.bind(this);
  }

  render() {
    return (
      <div className="box">
        <div>
          <h2>Enemies</h2>
          <ul>
            { this.props.enemies.entrySeq().map(item => <li key={item[0]}>{item[1].name}</li>) }
          </ul>
          <h3>Add</h3>
          <div className="row">
            <label>Name:</label>
            <input id="enemyName" type="text" />
          </div>
          <div className="row">
            <label>HP:</label>
            <input id="enemyHp" type="number" min="0" max="1000" />
          </div>
          <div className="row">
            <label>Initiative:</label>
            <input id="enemyInitiative" type="number" min="0" max="100" />
          </div>
          <div className="row">
            <button onClick={this.addEnemy}>Add</button>
          </div>
        </div>
        <div className="builderOptions">
          <button
            className="start"
            onClick={this.start}>Start</button>
        </div>
        <div className="clearfix" />
      </div>
    )
  }

  addEnemy() {
    const enemyName = document.getElementById('enemyName').value;
    const enemyHp = document.getElementById('enemyHp').value;
    const enemyInitiative = document.getElementById('enemyInitiative').value;

    this.props.onAddEnemy({ name: enemyName, hp: enemyHp, initiative: enemyInitiative });
  }

  start() {
    this.props.onStart(this.props.enemies, this.props.players);
  }
}
