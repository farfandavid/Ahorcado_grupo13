import InfoDevelopers from "./InfoDevelopers";
import desarrolladores from './json/desarrolladores.json';
import '../stylesheets/InfoDevelopers.css';


function Developers() {
    return (
        <div className="Contenedor-dev">
            <h1 className="Titulo">Desarrolladores</h1>
            <div className="Developers">
                {desarrolladores.map(info =>
                    <InfoDevelopers
                        img={info.img}
                        nombre={info.nombre}
                        Edad={info.Edad}
                        intereses={info.intereses}
                        GitHub={info.GitHub} />

                )
                }
            </div>
        </div>

    );
}
export default Developers;