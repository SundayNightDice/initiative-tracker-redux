import React from 'react';
import AddPlayer from './addPlayer';

export default class Home extends React.Component {

  constructor() {
    super();
    this.renderEncounter = this.renderEncounter.bind(this);
  }

  render() {
    return (
      <div id="contents">
        <div class="players">
          <h2>Players</h2>
          <ul>
            {this.props.players.entrySeq().map(p => <li key={p[0]}>{p[1].name}</li>)}
          </ul>
          <AddPlayer />
        </div>
        <div class="encounters">
          <h2>Encounters</h2>
          <ul>
            {this.props.encounters.entrySeq().map(e => this.renderEncounter(e[1], e[0]))}
          </ul>
          <button onClick={this.props.onAddEncounter}>Add Encounter</button>
        </div>
      </div>
    );
  }

  renderEncounter(encounter, id) {
    return <li key={id}><span>{id}</span><button>Start</button></li>;
  }
}
