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

                <input type="checkbox" id="rememberMe" />
                <label className="label" htmlFor="rememberMe">
                  Recuerdame 
                </label>

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

              </div>

              <button className="chat-gp3"> <span>Chat GP3</span>
              </button>
            </div>



            <button className="btn">Guaeadar tarea </button>
  
            <p className="no-account">
              Don't Have an Account ?<a className="link"> Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default NewDuties;
  