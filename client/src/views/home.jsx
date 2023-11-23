import React, { useEffect, useState } from "react";
import NewDuties from "../componets/newDuties";
import NuevaTareaButton from "../componets/nuevaTareaButton";


function Home() {
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
        console.log("clik nueva tarea")
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
        <div className="boton-nueva-tarea">
          <NuevaTareaButton onClick={openModal} />
        </div>
     
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close" onClick={closeModal}>&times;</span>
              <NewDuties closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Home;