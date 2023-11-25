import React, { useEffect, useState } from "react";
import NewDuties from "../componets/newDuties";
import NuevaTareaButton from "../componets/nuevaTareaButton";
import Cards from "../componets/cards";
import "./home.css";

function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cards, setCards] = useState([]);
    
    const openModal = () => {
        console.log("clik nueva tarea")
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const addCard = (newCard) => {
      setCards([...cards, newCard]);
      console.log(cards)
    };
    const deleteCard = (index) => {
      console.log(index)
      const nuevasTareas = [...cards];
      nuevasTareas.splice(index, 1);
    
      setCards(nuevasTareas);
    };
 
    return (
      <div className="contenedor">
        <div className="boton-nueva-tarea">
          <NuevaTareaButton onClick={openModal} />
        </div>
     <div>
     <Cards tareas={cards} deleteCard={deleteCard}/>
     </div>
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close" onClick={closeModal}>&times;</span>
              <NewDuties closeModal={closeModal} addCard={addCard} />
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Home;