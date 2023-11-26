import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ tarea ,deleteCard}) {
  const { titulo, descripcion, fechaInicio, fechaFin ,prioridad} = tarea;

const handlerDelete = (index)=>{
  console.log("boton de eliminar");
  
  deleteCard();
};
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="checkbox-delete">

            <input  className="checkbox" type="checkbox" />
            <div className={`${prioridad === 'high' ? 'high' : prioridad === 'medium' ? 'medium' : 'low'}`}>
            </div>
            <button className='delete-button' onClick={handlerDelete}> X</button>
          </div>
          <span className="title">{titulo}</span>
          <div>
            <p>{descripcion}</p>
          </div>
          <span>Fecha de inicio: {fechaInicio}</span>
          <span>Fecha de fin: {fechaFin}</span>

        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  tarea: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    fechaInicio: PropTypes.string.isRequired,
    fechaFin: PropTypes.string.isRequired,
    prioridad:PropTypes.string.isRequired,
  }).isRequired,
   deleteCard: PropTypes.func.isRequired,
};

export default Card;
