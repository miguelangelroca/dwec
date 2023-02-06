class Vehiculo {
  constructor(marca, modelo, color, anyo, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
    this.cilindrada = cilindrada;
  }
  mostrarDatos() {
    if (!document.getElementById("tabla")) {
      var table = document.createElement("table");
      table.setAttribute("id", "tabla");

      var tr = document.createElement("tr");
      var th1 = document.createElement("th");
      var text = document.createTextNode("Marca");
      th1.appendChild(text);
      tr.appendChild(th1);

      var th2 = document.createElement("th");
      var text = document.createTextNode("Modelo");
      th2.appendChild(text);
      tr.appendChild(th2);

      var th3 = document.createElement("th");
      var text = document.createTextNode("Color");
      th3.appendChild(text);
      tr.appendChild(th3);

      var th4 = document.createElement("th");
      var text = document.createTextNode("Año");
      th4.appendChild(text);
      tr.appendChild(th4);

      var th5 = document.createElement("th");
      var text = document.createTextNode("Cilindrada");
      th5.appendChild(text);
      tr.appendChild(th5);

      var thead = document.createElement("thead");
      thead.appendChild(tr);

      table.appendChild(thead);

      var tbody = document.createElement("tbody");
      tbody.setAttribute("id", "tbody");

      var tr = document.createElement("tr");
      var values = Object.keys(this);
      for (var i = 0; i < 5; i++) {
        var value = values[i];
        var td = document.createElement("td");
        var text = document.createTextNode(`${this[value]}`);
        td.appendChild(text);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);

      table.appendChild(tbody);
      document.getElementById("container").appendChild(table);
    } else {
      var table = document.getElementById("tabla");

      var tr = document.createElement("tr");
      var values = Object.keys(this);

      for (var i = 0; i < 5; i++) {
        var value = values[i];
        var td = document.createElement("td");
        var text = document.createTextNode(`${this[value]}`);
        td.appendChild(text);
        tr.appendChild(td);
      }
      var tbody = document.getElementById("tbody");
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("container").appendChild(table);
  }
}
var objeto1 = new Vehiculo("Ford", "Focus", "Rojo", "2020", 1600);
var objeto2 = new Vehiculo("Seat", "Ibiza", "Amarillo", "2018", 1900);
var objeto3 = new Vehiculo("Renault", "Megane", "Verde", "2020", 1500);
var objeto4 = new Vehiculo("Peugeot", "508", "Blanco", "2021", 2000);
var objeto5 = new Vehiculo("Toyota", "Yaris", "Azul", "2017", 1200);

var objetos = [objeto1, objeto2, objeto3, objeto4, objeto5];

document.getElementById("generar").addEventListener("click", () => {
  objetos.forEach((objeto) => {
    objeto.mostrarDatos();
  });
  document.getElementById("generar").setAttribute("disabled", "");
});
