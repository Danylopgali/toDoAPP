import "./card.css"
function Card(){
    return(
        <div>
            <div class="container">
            <div class="box">
             <span class="title">Titulo</span>
             <div>
            <strong>Tareas</strong>
            <div>
              <ul>
                <li>
                  <input type="checkbox" id="item1" />{" "}
                  <label htmlFor="item1">Tarea 1</label>
                </li>
                <li>
                  <input type="checkbox" id="item2" />{" "}
                  <label htmlFor="item2">Tarea 2</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
                <li>
                  <input type="checkbox" id="item3" />{" "}
                  <label htmlFor="item3">Tarea 3</label>
                </li>
              </ul>
            </div>
            <span>fecha de inicio</span> <span>fecha de fin </span>
          </div>
         </div>
          </div>
        </div>
    )
}
export default Card;