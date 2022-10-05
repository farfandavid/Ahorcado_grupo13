import InfoDevelopers from "./InfoDevelopers";
import desarrolladores from './json/desarrolladores.json';
import '../stylesheets/InfoDevelopers.css';


function Developers(){
    return(
        <>
        <h1 className="Titulo">Desarrolladores</h1>

        {desarrolladores.map(info =>
           <InfoDevelopers
           img={info.img}
           nombre={info.nombre}
           Edad={info.Edad}
           intereses={info.intereses}
           GitHub={info.GitHub}/>
            
             )
          }
     </>
        
    );
}
export default Developers;