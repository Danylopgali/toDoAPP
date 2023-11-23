import { useState } from "react";
import "./NuevaTareaButton.css";

function NuevaTareaButton({onClick}) {
  
  return (
    <div>
      <button  className="button" onClick={onClick}>
        <span className="button_lg">
          <span className="button_sl"></span>
          <span className="button_text">NUEVA TAREA</span>
        </span>
      </button>
    </div>
  );
}

export default NuevaTareaButton;
