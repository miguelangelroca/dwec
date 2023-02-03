document.addEventListener("mousedown", evento);
function evento(boton) {
  if (boton.button == 0) {
    alert("Pulsaste el click izquierdo del raton.");
  } else if (boton.button == 2) {
    alert("Pulsaste el click derecho del raton.");
  } else if (boton.button == 1) {
    alert("Pulsaste el click de la rueda del raton.");
  }
}
