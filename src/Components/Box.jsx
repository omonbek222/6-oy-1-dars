import React from 'react';

const Box = ({ width, height, color }) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
  };

  return <div style={style}></div>;
};

export default Box;
