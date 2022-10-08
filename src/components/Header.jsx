//------Importaciones-------//

import { Link } from 'react-router-dom';
import '../stylesheets/Header.css'

//--------------------------//

/* Componente de funcion que se llama "Header",que devuelve elementos y se situara al principio de la pagina */
function Header(){
    return(
        /*etiqueta header que representa un encabezado para la pagina y en este caso devuelve una lista de elementos como h1 que es un titulo, 3 botones que proporcionan navegacion en la pagina y algunas etiquetas div para poder darle diferentes estilos en CSS */
        <header>
            <div className='menu'>    
                <h1 className='titulo'>Grupo 13</h1>       
                <div className='caja'>
                <button><Link to ="/">Inicio</Link></button>
                <button><Link to ="/Juegos">Juegos</Link></button>
                <button><Link to ="/Desarrolladores">Desarrolladores</Link></button>
                </div>          
            </div>
        </header>
    );
}

//-------Exportacion del componente-----//

export default Header;

