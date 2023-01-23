document.addEventListener(
  "mousedown",
  () => (document.getElementById("imagen").src = "foto2.jpg")
);
document.addEventListener(
  "mouseup",
  () => (document.getElementById("imagen").src = "foto1.jpg")
);
