import React from 'react';

const Modal = ({ title, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

<Modal title="Delete Confirmation">
  <p>Are you sure you want to delete?</p>
  <button>Yes</button>
  <button>No</button>
</Modal>
