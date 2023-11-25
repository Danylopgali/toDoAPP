import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ tarea }) {
  const { titulo, descripcion, fechaInicio, fechaFin } = tarea;

  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="checkbox-delete">
            <input  className="checkbox" type="checkbox" />
            <button className='delete-button'> X</button>
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
  }).isRequired,
};

export default Card;
