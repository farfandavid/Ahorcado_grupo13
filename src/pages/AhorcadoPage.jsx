import LetraComp from "../components/ahorcaoComp/LetraComp";
import { useState, useEffect } from "react";
import '../stylesheets/AhorcadoStyles/AhorcadoStyle.css'
import LetraPalabraComp from "../components/ahorcaoComp/LetraPalabraComp";

function AhorcadoPage() {
  const [palabra, setPalabra] = useState([[], []]);
  const [alfabeto, setAlfabeto] = useState([]);
  const [marcardo, setMarcado] = useState(false);

  //Cargando el Alfabeto
  useEffect(() => {
    fetch("json/alfabeto.json")
      .then(response => response.json())
      .then(datos => {
        setAlfabeto(datos)
      });
    console.log("Alfabeto Cargado")
  }, []);

  //Cargando Las Palabras
  useEffect(() => {

    fetch("json/palabras.json")
      .then(response => response.json())
      .then(datos => {
        //console.log(datos[Math.floor(Math.random() * datos.length)]);
        //setPalabra(datos[Math.floor(Math.random() * datos.length)])
        //console.log(Object.keys(datos[Math.floor(Math.random() * datos.length)]))
        //console.log(Array.from(Object.keys(datos[Math.floor(Math.random() * datos.length)]).toString()))
        var objeto = Array.from(Object.keys(datos[Math.floor(Math.random() * datos.length)]).toString());
        console.log(objeto);

        setPalabra([objeto, [...new Array(objeto.length)].map(() => true)]);
      });
    console.log("Palabras Cargadas");
    //console.log(palabra);
  }, []);

  useEffect(() => {
    //console.log(alfabeto)
    setMarcado(false);
  }, [marcardo])
  //const palabras = ["Arbol", "Cocina", "Doctor"];

  const clickeado = (index, val) => {
    alfabeto[index][val] = false;
    setAlfabeto(alfabeto);
    console.log(Object.keys(alfabeto[index]).toString());
    palabra[0].forEach((element, val) => {
      if (Object.keys(alfabeto[index]).toString() === String(element).toUpperCase()) {
        palabra[1][val] = false;
        console.log("Entro");
      } else {
        console.log("Error");
      }
    });
    //console.log(palabra);
    setMarcado(true);
  }
  //return palabras[Math.floor(Math.random() * palabras.length)];
  return (
    <div>
      <div>
        <img alt="Imagen Ahorcado" />
        <div className="Alfabeto">
          {palabra[0].map((item, index) => (
            <LetraPalabraComp isDescubierto={palabra[1][index]} index={index}>{item}</LetraPalabraComp>
          ))}
        </div>
      </div>
      <div className="Alfabeto">
        {alfabeto.map((item, index) => (
          <LetraComp manejarClick={clickeado} index={index}>{item}</LetraComp>
        ))}
      </div>
    </div>
  );
}

export default AhorcadoPage;