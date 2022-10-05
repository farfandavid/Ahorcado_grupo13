import '../../stylesheets/AhorcadoStyles/LetraCompStyle.css'


function LetraPalabraComp({ children, isDescubierto }) {

  //const isClicked = letra => {
  //console.log(letra);
  //return letra[Object.keys(children)];
  // }

  return (
    <div
      className={`Letras ${isDescubierto ? '' : 'clickeado'}`.trimEnd()}>
      {children}
    </div>
  );
}

export default LetraPalabraComp;