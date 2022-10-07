import LetraComp from "../components/ahorcaoComp/LetraComp";
import { useState, useEffect } from "react";
import '../stylesheets/AhorcadoStyles/AhorcadoStyle.css'
import LetraPalabraComp from "../components/ahorcaoComp/LetraPalabraComp";
import Modal from "../components/modals/Modal";
import styled from 'styled-components';

function AhorcadoPage() {
  const [ganaste, setModalGanaste] = useState(false);
  const [perdiste, setModalPerdiste] = useState(false);
  const [palabra, setPalabra] = useState([[], []]);
  const [alfabeto, setAlfabeto] = useState([]);
  const [marcardo, setMarcado] = useState(false);
  const [imagenAhorcado, setImagenAhorcado] = useState(0);

  //Cargando el Alfabeto
  useEffect(() => {
    fetch("json/alfabeto.json")
      .then(response => response.json())
      .then(datos => {
        setAlfabeto(datos)
      });
    console.log("Alfabeto Cargado")
  }, []);
  function refreshPage() {
    window.location.reload();
  }
  //Cargando Las Palabras
  useEffect(() => {

    fetch("json/palabras.json")
      .then(response => response.json())
      .then(datos => {
        var objeto = Array.from(Object.keys(datos[Math.floor(Math.random() * datos.length)]).toString());
        console.log(objeto);
        setPalabra([objeto, [...new Array(objeto.length)].map(() => true)]);
      });
    console.log("Palabras Cargadas");
    //console.log(palabra);
  }, []);

  useEffect(() => {
    setMarcado(false);
  }, [marcardo])

  const clickeado = (index, val) => {
    if (alfabeto[index][val] === true) {
      alfabeto[index][val] = false;
      setAlfabeto(alfabeto);
      console.log(Object.keys(alfabeto[index]).toString());
      let contadorError = 0;
      palabra[0].forEach((element, val) => {
        if (Object.keys(alfabeto[index]).toString() === String(element).toUpperCase()) {
          palabra[1][val] = false;
          console.log(ganaste);
        } else {
          contadorError++;
        }
        if ((contadorError === palabra[0].length) && (imagenAhorcado < 5)) {
          console.log(contadorError);
          setImagenAhorcado(imagenAhorcado + 1);
        } else if ((contadorError === palabra[0].length) && (imagenAhorcado === 5)) {
          setImagenAhorcado(imagenAhorcado + 1);
          setModalPerdiste(true);
        }
      });
      let contadorAciertos = 0;
      palabra[0].forEach((element, index) => {
        if (palabra[1][index] === false) {
          contadorAciertos++;
        }
        if (contadorAciertos === palabra[1].length) {
          console.log("aciertos: " + contadorAciertos);
          console.log("de: " + palabra[1].length);
          setModalGanaste(true);
        }
      })
      setMarcado(true);
    }
  }

  return (
    <div>
      <div>
        <img src={`images/ahorcado/img${imagenAhorcado}.png`.trimEnd()} alt="Imagen Ahorcado" />
        <div className="Alfabeto">
          {palabra[0].map((item, index) => (
            <LetraPalabraComp key={item + "palabra" + index} isDescubierto={palabra[1][index]} index={index}>{item}</LetraPalabraComp>
          ))}
        </div>
      </div>
      <div className="Alfabeto">
        {alfabeto.map((item, index) => (
          <LetraComp key={index + " Letra"} manejarClick={clickeado} index={index}>{item}</LetraComp>
        ))}
      </div>
      <Modal estado={ganaste} cambiarEstado={setModalGanaste} titulo="" mostrarHeader={true}>
        <Contenido>
          <h1>{`Ganaste!!!`}</h1>
          <button onClick={refreshPage} >Reiniciar</button>
        </Contenido>
      </Modal>
      <Modal estado={perdiste} cambiarEstado={setModalPerdiste} titulo="" mostrarHeader={true}>
        <Contenido>
          <h1>{`Perdiste!!!`}</h1>
          <button onClick={refreshPage} >Reiniciar</button>
          <h2>Respuesta: </h2>
          <div className="Alfabeto">
            {palabra[0].map((item, index) => (
              <LetraPalabraComp key={item + "palabra" + index} isDescubierto={false} index={index}>{item}</LetraPalabraComp>
            ))}
          </div>
        </Contenido>
      </Modal>
    </div>
  );
}

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;

export default AhorcadoPage;