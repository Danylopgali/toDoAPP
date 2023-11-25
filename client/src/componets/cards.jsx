import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import "./cards.css"
function Cards({ tareas , deleteCard}) {
  return (
    <div className='cards-container'>
      {/* Renderizar una tarjeta para cada tarea */}
      {tareas.map((tarea, index) => (
        <Card key={index} tarea={tarea} deleteCard={() => deleteCard(index)}/>
      ))}
    </div>
  );
}

Cards.propTypes = {
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      fechaInicio: PropTypes.string.isRequired,
      fechaFin: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,

};

export default Cards;
