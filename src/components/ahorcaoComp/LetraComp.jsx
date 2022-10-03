import '../../stylesheets/AhorcadoStyles/LetraCompStyle.css'


function LetraComp({ manejarClick, children, index }) {

  const isClicked = letra => {
    //console.log(letra);
    return letra[Object.keys(children)];
  }

  return (
    <div
      className={`Letras ${isClicked(children) ? '' : 'clickeado'}`.trimEnd()}
      onClick={() => manejarClick(index, Object.keys(children))}>
      {Object.keys(children)}
    </div>
  );
}

export default LetraComp;