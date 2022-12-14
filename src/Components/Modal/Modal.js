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
            <h2 className="headng">Attendance</h2>
<br/>

          {arr.map((num,i) => (
                <>
            
            <div class="btn-group">

            {i%2==0? <div className="left"><span style={{color:"red"}}>In </span>:  {num}</div>:<div className="right"><span style={{color:"green"}}>Out </span>:  {num}</div>}
            
            </div>
            
            </>
            
            ))}       
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            
          </div>
          
        </div>
      )}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa veniam eum magnam soluta molestias accusamus, maiores tenetur quae </p> */}
    </>
  );
}