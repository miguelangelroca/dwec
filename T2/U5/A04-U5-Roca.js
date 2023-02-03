raton = document.addEventListener(
  "mousedown",
  () => (document.body.style.backgroundColor = "#FFFF00")
);

teclado = document.addEventListener(
  "keydown",
  () => (document.body.style.backgroundColor = "#CCE6FF")
);

movimiento = document.addEventListener(
  "mousemove",
  () => (document.body.style.backgroundColor = "#FFFFFF")
);
