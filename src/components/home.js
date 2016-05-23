import React from 'react';
import EncountersList from './encountersList';
import PlayersList from './playersList';

export default class Home extends React.Component {

  render() {
    return (
      <div id="contents">
        <PlayersList
          players={this.props.players.entrySeq()} />
        <EncountersList
          encounters={this.props.encounters.keySeq()}
          onAddEncounter={this.props.onAddEncounter}
          onStartEncounter={this.props.onStartEncounter} />
      </div>
    );
  }
}
