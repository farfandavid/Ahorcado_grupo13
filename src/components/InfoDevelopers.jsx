import '../stylesheets/InfoDevelopers.css'

function InfoDevelopers(props) {
    return (
        <>
            

            <div className="Desarrolladores">
                <div className='info'>
                <img className='imagen' src={props.img} />
                    <div className='propiedades'>
                    <h4>Nombre:{props.nombre}</h4>
                    <p>Edad:{props.Edad}</p>
                    <p>Intereses:{props.intereses}</p>
                    <p>GitHub:{props.GitHub}</p>
                    </div>                       
                </div>
            </div>
        </>
    );
}
export default InfoDevelopers;

