import LetraComp from "../components/ahorcaoComp/LetraComp";
import { useState, useEffect } from "react";
import '../stylesheets/AhorcadoStyles/AhorcadoStyle.css'


function AhorcadoPage() {
  const [alfabeto, setAlfabeto] = useState([]);
  const [ggg, setGGG] = useState(false);

  useEffect(() => {
    fetch("json/alfabeto.json")
      .then(response => response.json())
      .then(datos => {
        setAlfabeto(datos)
      });
    console.log("Hola")
  }, []);

  useEffect(() => {
    //setAlfabeto(alfabeto);
    console.log(alfabeto)
    setGGG(false);
  }, [ggg])
  //const alfabeto = ListarAlfabeto();
  const palabras = ["Arbol", "Cocina", "Doctor"];

  //const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];

  const clickeado = (index, val) => {
    //console.log(index);
    //console.log(val);
    //console.log(alfabeto);
    alfabeto[index][val] = false;
    //console.log(alfabeto);
    setAlfabeto(alfabeto);
    setGGG(true);
    //console.log(alfabeto);
  }

  const obtenerPalabra = () => {
    return palabras[Math.floor(Math.random() * palabras.length)];
  }

  return (
    <div>
      <div>
        <img alt="Imagen Ahorcado" />
        <div className="Alfabeto">
          {[...obtenerPalabra()].map(item => (
            <LetraComp manejarClick={clickeado} >{item}</LetraComp>
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