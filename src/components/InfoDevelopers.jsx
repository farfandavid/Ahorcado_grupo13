import '../stylesheets/InfoDevelopers.css'

function InfoDevelopers(props) {
    return (
        <>
            <div className='info'>
                <div className='propiedades'>
                <img className='imagen' src={props.img} />
                    <h4>Nombre:{props.nombre}</h4>
                    <p>Edad:{props.Edad}</p>
                    <p>Intereses:{props.intereses}</p>
                    <p>GitHub:{props.GitHub}</p>
                </div>
            </div>
        </>
    );
}
export default InfoDevelopers;

