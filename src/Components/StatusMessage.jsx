import React from 'react';

const StatusMessage = ({ isSuccess }) => {
  return (
    <div>
      {isSuccess ? "Success!" : "Error!"}
    </div>
  );
};

export default StatusMessage;
