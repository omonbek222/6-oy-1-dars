import React from 'react';

const IconButton = ({ icon, type }) => {
  return (
    <button type={type} className="icon-button">
      <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;

