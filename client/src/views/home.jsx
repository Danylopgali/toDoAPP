import Cards from "../componets/cards";
import NuevaTareaButton from "../componets/nuevaTareaButton";

function Home(){
    return(
        <div>
             <div className="boton-nurvatarea">
             <NuevaTareaButton/>
             <Cards/>
             </div>

        </div>
    )
}
export default Home;