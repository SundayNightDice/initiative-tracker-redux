import React from 'react';

export default class EncounterSummary extends React.Component {

  render() {
    return (
      <div className="box">
        <div>
          <h2>Encounter {this.props.status === 'victory' ? 'Victory' : 'Failure'}</h2>
        </div>
        <div className="builderOptions">
        </div>
      </div>
    );
  }
}
