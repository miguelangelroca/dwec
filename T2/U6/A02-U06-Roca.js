function create() {
  var div = document.createElement("div");
  div.setAttribute("style", "border: solid 1px black")
  var container = document.getElementById("container");
  var text = document.getElementById("text").value;
  if (!text == "") {
    document.getElementById("text").value = "";
    div.innerHTML = text;
    container.appendChild(div);
  } else {
    alert("Debe introducir algun dato.");
  }
}

function remove() {
  var container = document.getElementById("container");
  if (!container.lastChild) {
    alert("No hay nada que borrar.");
  } else {
    container.removeChild(container.lastChild);
  }
}
