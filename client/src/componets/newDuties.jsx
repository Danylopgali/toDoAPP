import "./newDuties.css"

function NewDuties() {
    return (
      <div className="card-container">
      
        <div className="container">
          <div className="log-card">
            <p className="heading">Crea una nueva tarea</p>
  
            <div className="input-group">
              <p className="text">Titulo</p>
              
              <input className="input" type="text" placeholder="Por ejemplo: Proyecto todo app " /> 
              <p className="text">Descripcion</p>
              <input className="input" type="text" placeholder="Escribe la descripcio de la tarea" /> 
            </div>
           

            <div className="password-group">
            <div className="checkbox-group">
            <div class="label-container">
              <input type="checkbox" id="rememberMe" />
              <label class="label" htmlFor="rememberMe">
               Recuérdame
             </label>
             </div>
                 </div>
                <button className="chat-gp3"> <span>Chat GP3</span>
                </button>
            </div>

            <div className="parametros-2">
              
            <ul className="wrapper">
                  <li className="icon low-priority">
                   <span className="tooltip">Poca Prioridad</span>
                   <span><i className="fas fa-exclamation-circle"></i></span>
                  </li>
                  <li className="icon medium-priority">
                   <span className="tooltip">Prioridad Media</span>
                   <span><i className="fas fa-exclamation-triangle"></i></span>
                  </li>
                  <li className="icon high-priority">
                   <span className="tooltip">Alta Prioridad</span>
                   <span><i className="fas fa-exclamation-circle"></i></span>
                   </li>
                 </ul>
                 
               <div className="fechas">
                 <p>
                <label for="fecha">Fecha Inicio: </label>
                <input type="date" id="fecha" name="fecha" />
                 </p>
                 <p>
                 <label for="fecha">Fecha Final: </label>
                  <input type="date" id="fecha" name="fecha" />
                 </p>
                 </div>

            </div>


            <button className="btn">Guadar tarea </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default NewDuties;
  