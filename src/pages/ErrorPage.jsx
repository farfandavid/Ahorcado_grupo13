
//-------Importaciones-------//

import '../stylesheets/Error.css';

//--------------------------//

/* Componente de funcion llamado "ErrorPage" que devuelve varios elementos, un <h1> y <h2> para describir el error de la pagina. Devulve un div para darle estilos con CSS  */
function ErrorPage(){
    return(
        <div className='conteiner'>
        <h1>ERROR 404</h1>
        <h2>not found</h2>
        </div>
    );
}

//-------Exportacion del componente-----//

export default ErrorPage;