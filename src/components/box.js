import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      { props.children }
      <div className="clearfix" />
    </div>
  );
}

export default Box;
