import { Link } from 'react-router-dom';
import '../stylesheets/Header.css'

function Header(){
    return(
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
export default Header;

