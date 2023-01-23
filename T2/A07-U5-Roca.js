document.addEventListener("DOMContentLoaded", function () {
  var imagen = document.getElementById("imagen");
  imagen.addEventListener("error", (element) => {
    element.target.alt = "Error al cargar la imagen.";
  });
});
