import '../stylesheets/Menu.css';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <div className='MenuEstilo'>
        <h2>Grupo 13  </h2>
        <div className='boton'><Link to ="/Juegos">Jugar</Link></div>
        <h5>Fundamentos de programacion web </h5>
        </div>
        
        </>
        
    );
}
export default Menu;


