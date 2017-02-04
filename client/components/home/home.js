import React from 'react';
import EncountersList from './encountersList';
import PlayersList from './playersList';

const Home = (props) => {
  return (
    <div id="contents">
      <PlayersList
        classes={props.classes.keySeq()}
        players={props.players.entrySeq()}
        races={props.races}
        onAddPlayer={props.onAddPlayer}
        onDeletePlayer={props.onDeletePlayer}
        onRest={props.onRest}
        onToggleAddPlayer={props.onToggleAddPlayer}
        ui={props.ui} />
      <EncountersList
        encounters={props.encounters.entrySeq()}
        onAddEncounter={props.onAddEncounter}
        onDeleteEncounter={props.onDeleteEncounter}
        onEditEncounter={props.onEditEncounter}
        onStartEncounter={props.onStartEncounter} />
    </div>
  );
}

export default Home;
