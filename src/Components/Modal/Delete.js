import React, { useState } from "react";
import "./Modal.css";

const arr = ['3:00',"4:00","6:00","7:00","8:00","9:00"]

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <br/>
            <h2 className="headng">Are you sure?</h2>
            <p>Do you want to delete these records? The process can't be undone</p>
<br/>
            <button className="cancel" onClick={toggleModal}>
              CANCEL
            </button>
            <button className="delete">
              DELETE
            </button>
          </div>
          
        </div>
      )}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa veniam eum magnam soluta molestias accusamus, maiores tenetur quae </p> */}
    </>
  );
}