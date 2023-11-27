import React, { useState } from 'react';
import './newDuties.css';

function NewDuties({ closeModal, addCard }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [prioridad, setPrioridad] = useState('');


  const handleGuardarTarea = () => {
    const nuevaTarea = {
      titulo,
      descripcion,
      fechaInicio,
      fechaFin,
      prioridad,
    };

    // Llama a la función 'addCard' pasada como prop para agregar la nueva tarjeta
    addCard(nuevaTarea);

    // Limpia los campos del formulario después de guardar la tarea
    setTitulo('');
    setDescripcion('');
    setFechaInicio('');
    setFechaFin('');
    setPrioridad("")

    // Cierra el modal llamando a la función proporcionada por el componente padre
    closeModal();
  };

 const handleCerrarNewDuties =()=> {
  setTitulo('');
  setDescripcion('');
  setFechaInicio('');
  setFechaFin('');
  setPrioridad("")

  // Cierra el modal llamando a la función proporcionada por el componente padre
  closeModal();

 }


  const handlePrioridad= (e)=>{
console.log("boton de prioridad")
console.log(e.target.className)
if (e.target.id==="low"){
  console.log("este es el boton de prioridad baja ")
  setPrioridad("low")
}
else if (e.target.id==="high"){
  console.log("este es el boton de prioridad alta ")
  setPrioridad("high")
}
else if (e.target.id==="medium"){
  console.log("este es el boton de prioridad media ")
  setPrioridad("medium")
}

}
  

  return (
    <div id="myModal"  className="card-container">
      <div className="container">
        <div className="log-card">
          <div className='top' >
          <p className="heading">Crea una nueva tarea</p>
           <button className='delete-button' onClick={handleCerrarNewDuties}> X</button>
          </div>

          <div className="input-group">
            <p className="text">Titulo</p>
            <input
              className="input"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Por ejemplo: Proyecto todo app"
            />
            <p className="text">Descripcion</p>
            <input
              className="input"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Escribe la descripción de la tarea"
            />
          </div>

          <div className="password-group">
            <div className="checkbox-group">
              <div className="label-container">
                <input type="checkbox" id="rememberMe" />
                <label className="label" htmlFor="rememberMe">
                  Recuérdame
                </label>
              </div>
            </div>
            <button className="chat-gp3">
              <span>Chat GP3</span>
            </button>
          </div>

          <div className="parametros-2">
            <ul className="wrapper">
              <li id="low" className="icon low-priority" onClick={handlePrioridad}>
                <span className="tooltip" >Poca Prioridad</span>
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </li>
              <li id='medium' className="icon medium-priority" onClick={handlePrioridad}>
                <span className="tooltip">Prioridad Media</span>
                <span>
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </li>
              <li id='high' className="icon high-priority" onClick={handlePrioridad}>
                <span className="tooltip">Alta Prioridad</span>
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </li>
            </ul>

            <div className="fechas">
              <p>
                <label htmlFor="fecha">Fecha Inicio: </label>
                <input
                  type="date"
                  id="fecha"
                  name="fechaInicio"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="fecha">Fecha Final: </label>
                <input
                  type="date"
                  id="fecha"
                  name="fechaFin"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
              </p>
            </div>
          </div>

          <button className="btn" onClick={handleGuardarTarea}>
            Guardar tarea
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewDuties;
