import '../stylesheets/Menu.css';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <div className='MenuEstilo'>
        <h6>Fundamentos de programacion web </h6>
        <div className='boton'><Link to ="/Juegos">Jugar</Link></div>
        <h2>Grupo 13  </h2>
        
        </div>
        </>
        
    );
}
export default Menu;


