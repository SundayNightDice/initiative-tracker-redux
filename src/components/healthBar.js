import React from 'react';

const HealthBar = (props) => {
  const healthPc = (props.hp/props.maxHp) * 100;
  const healthStyle = {
    width: `${healthPc}%`
  };
  const healthClass = (healthPc > 55) ?
    'high' :
    (healthPc > 30) ?
      'medium' :
      'low';

  return (
    <div className="health-bar">
      <div className={`health ${healthClass}`} style={healthStyle}></div>
    </div>
  );
};

export default HealthBar;
