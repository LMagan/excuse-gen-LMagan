/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/funnyface.ico";

window.onload = function() {
  let quien = [
    "Mi primo ",
    "Mi vecino ",
    "Una anciana ",
    "Batman ",
    "Una horda de zombies ",
    "Goku ",
    "Un anciano ",
    "Un sacerdote "
  ];
  let acción = [
    "destruyó ",
    "explotó ",
    "robó ",
    "bailó sobre ",
    "disparó a ",
    "golpeó ",
    "quemó "
  ];
  let objeto = [
    "mi móvil ",
    "mi bicicleta ",
    "mi ordenador ",
    "mi coche ",
    "mis zapatillas ",
    "mi patín ",
    "mi cartera "
  ];
  let donde = [
    "en la calle ",
    "en el circo ",
    "en mi casa ",
    "en la playa ",
    "en el aeropuerto ",
    "en el gimnasio ",
    "en el restaurante "
  ];
  let cuando = [
    "justo antes de venir.",
    "ayer.",
    "esta mañana.",
    "anoche.",
    "hace una hora.",
    "antes de comer."
  ];
  let excusaFinal = "";
  // let rdm1 = Math.floor(Math.random() * quién.length);
  // let rdm2 = Math.floor(Math.random() * acción.length);
  // let rdm3 = Math.floor(Math.random() * objeto.length);
  // let rdm4 = Math.floor(Math.random() * donde.length);
  // let rdm5 = Math.floor(Math.random() * cuando.length);

  function creadorExcusa(parteExcusa) {
    return parteExcusa[Math.floor(Math.random() * parteExcusa.length)];
  }
  excusaFinal =
    creadorExcusa(quien) +
    creadorExcusa(acción) +
    creadorExcusa(objeto) +
    creadorExcusa(donde) +
    creadorExcusa(cuando);
  document.querySelector("#excusa").innerHTML = excusaFinal;
};
