import React from 'react';

export default class Status extends React.Component {

  render() {

    if (this.props.hp === 0) {
      if (this.props.deathSaves === 3) {
        return <span className="status stable">Stable</span>;
      } else if (this.props.deathFails === 3) {
        return <span className="status dead">Dead</span>;
      } else {
        return <span className="status dying">Dying</span>;
      }
    }
    return null;
  }

}
