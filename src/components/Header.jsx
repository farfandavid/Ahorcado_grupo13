import { Link } from 'react-router-dom';
import '../stylesheets/Header.css'

function Header(){
    return(
        <header>
            <div className='menu'>
                <h1 className='titulo'>Grupo 13</h1>
                <a><Link to ="/">Inicio</Link></a>
                <a><Link to ="/Juegos">Juegos</Link></a>
                <a><Link to ="/Desarrolladores">Desarrolladores</Link></a>
            </div>
        </header>
    );
}
export default Header;

