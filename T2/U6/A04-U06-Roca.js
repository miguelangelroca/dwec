var alumnos = [];

document.getElementById("enviar").addEventListener("click", addNota);

function addNota() {
  if (alumnos.length < 5) {
    var alumno = document.getElementById("nombre").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    if (!alumno || !nota1 || !nota2 || !nota3) {
      alert("Debe completar todos los campos.");
    } else {
      alumnos.push([alumno, nota1, nota2, nota3]);
    }
  } else {
    crearTabla(alumnos);
  }
}

function crearTabla(alumnos) {
  var table = document.createElement("table");
  table.setAttribute("id", "tabla");

  var tr = document.createElement("tr");
  var th1 = document.createElement("th");
  var text = document.createTextNode("Alumno");
  th1.appendChild(text);
  tr.appendChild(th1);

  var th2 = document.createElement("th");
  var text = document.createTextNode("Cliente");
  th2.appendChild(text);
  tr.appendChild(th2);

  var th3 = document.createElement("th");
  var text = document.createTextNode("Servidor");
  th3.appendChild(text);
  tr.appendChild(th3);

  var th4 = document.createElement("th");
  var text = document.createTextNode("Diseño");
  th4.appendChild(text);
  tr.appendChild(th4);

  var thead = document.createElement("thead");
  thead.appendChild(tr);

  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  tbody.setAttribute("id", "tbody");

  table.appendChild(tbody);
  document.getElementById("container").appendChild(table);

  var table = document.getElementById("tabla");

  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var td = document.createElement("td");
      var text = document.createTextNode(alumnos[i][j]);
      td.appendChild(text);
      tr.appendChild(td);
    }
    var tbody = document.getElementById("tbody");
    tbody.appendChild(tr);
  }
  document.getElementById("enviar").setAttribute("disabled", "");
  table.appendChild(tbody);
  document.getElementById("container").appendChild(table);
}
