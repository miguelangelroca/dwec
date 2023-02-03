/**
 * 
 */


/************************************
*
* Funciones Generales
* 
************************************/


/**
 * Crea el contenedor de la actividad si no existe
 * Si existe lo borra para generar uno nuevo 
 */
function existeActividad(){
    if (document.getElementById("actividad")){
        content.removeChild(document.getElementById("actividad")); // Borra el elemento hijo del nodo con id "content" si el nodo actividad existe.
    }
    
    // Crea el contenedor de la actividad
    var divac = document.createElement("div");
    divac.setAttribute("id", "actividad"); // Crea el elemento div con el atributo id con valor actividad.
    content.appendChild(divac);
   
}

 /**
 * Recibe una cadena y devuelve la misma cadena con la primera letra en Mayúscula
 * @param {string} s 
 * @returns {string}
 */
function capitalize(s){
    return s.charAt(0).toLocaleUpperCase() + s.slice(1); // Pone la primera letra de una palabra en mayuscula.
}


/************************************
*
* Actividad 6
* 
************************************/
function generaNueve(){   
    
    const ALUMNOS = [];
    const NUMALUM = 5;

    /************************************
     *
     * FUNCIONES LOCALES A LA ACTIVIDAD
     * 
     ************************************/
    /**
     * Genera la tabla de alumnos
     * @param {array} cabecera 
     * @param {array} cuerpo 
     */
    function crearTablaAlum(cabecera, cuerpo){
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla")) // Si existe el elemento con id "tabla" elimina el primer nodo hijo.
        }

        var tabla = document.createElement("table"); // Crea el elemento tabla.
        tabla.setAttribute("id", "tabla"); // Añade el atributo id con el valor tabla.
        
        // genera la cebecera de la tabla
        var thead = document.createElement("thead"); // Crea la cabecera de la tabla donde meteremos los th.
        var tr = document.createElement("tr"); // Crea las filas de la tabla.
        
        for (e of cabecera){
            var th = document.createElement("th"); // Crea los th.
            var nodoTexto = document.createTextNode(capitalize(e)); // Crea los nodos texto con la primera letra en mayuscula.
            th.appendChild(nodoTexto); // Añade los elemento texto a los nodos th como hijos.
            tr.appendChild(th); // Añade los tr como hijo de los th.
        }
        thead.appendChild(tr); // Añade los elementos tr como hijos del thead.
        tabla.appendChild(thead); // Añade los elementos thead a tabla como hijos.
    
        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody"); // Crea el elemento tbody.
        for (fila of cuerpo){
            tr = document.createElement("tr"); // Crea los tr de forma dinamica.
            for (celda of fila){
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(celda);
                td.appendChild(nodoTexto); // Añade los nodostexto a los td.
                tr.appendChild(td); // Añade los td a tr como hijos.
            }
            tbody.appendChild(tr);
        }
    
        tabla.appendChild(tbody); // Añade el elemento creado de forma dinamica tbody al elemento tabla como hijo.
    
        actividad.appendChild(tabla); // Añade el elemento tabla al div con id "actividad".
    
    }


    /**
     * Comprueba que ningun campo esté vacio
     * 
     * @param  {...any} re
     * @returns {boolean} true si hay alguno vacío
     */
    function comprobarRegistros(...re){
        let interruptor = false;
        re.forEach(e =>{
            if(e === ""){
                interruptor = true; // Devuelve true si hay algun elemento vacio.
            }
        }); 
        return interruptor;
    }

    /**
     * Almacena a los alumnos y sus notas 
     */
    function guardarAlumno(){
       var nombre = document.getElementById("alumno").value;
       var modulo1 = document.getElementById("modulo1").value; // Almacena en variables los valores de los elementos con las ids que selecciona.
       var modulo2 = document.getElementById("modulo2").value;
       var modulo3 = document.getElementById("modulo3").value;

       //Si algun campo está vacío rompe la secuencia de la función
       if (comprobarRegistros(nombre, modulo1, modulo2, modulo3)){
           alert("Ningún campo puede estar vacío") // Muestra el alert en caso de que alguna variable este vacia.
           return;
       }

       // comprueba si los campos esán en el tipo adecuado
       if (isNaN(nombre) && !isNaN(modulo1, modulo2, modulo3)){ // Comprueba que nombre sea string y los modulos sean numeros.

            if ([modulo1, modulo2, modulo3].every(e => e >= 0 && e <= 10)){
                
                ALUMNOS.push([nombre,modulo1, modulo2, modulo3]); // Guarda los valores en un array.

                document.getElementById("alumno").value = "";
                document.getElementById("modulo1").value = "";
                document.getElementById("modulo2").value = ""; // Vacia los campos.
                document.getElementById("modulo3").value = "";

                if (ALUMNOS.length >= NUMALUM ){
                    alert("Todos los alumnos estan introducidos"); // Muestra un alert si todos los campos estan llenos.
                    guardar.disabled = true; // Desabilita el boton guardar.
                    generarTabla.disabled = false; // Habilita el boton generar tabla.
                } 

            } else{
                alert("Error: Las notas deben estar comprendidas entre 0 y 10"); // Alert en caso de que las notas no esten comprendidas entre 1 y 10.
            }

       } else{
            if(!isNaN(nombre)){
                alert(`Dato incorreco: ${nombre} no es un nombre`); // En caso de que nombre no sea un string.
            }
            if (isNaN(modulo1, modulo2, modulo3)){
                alert("Dato incorrecto: combruebe que en los modulos las notas sean números"); // En caso de que los modulos no sean numeros.
            }
       }


    }


    /************************************
     *
     * CREA EL CONTENIDO DE LA ACTIVIDAD
     * 
     ************************************/

    // Combrobamos que no existe el contenedor de la actividad si existe lo borramos 
    existeActividad();
   
    var actividad = document.getElementById("actividad");



    //Crea el enunciado
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("9. Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos. Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.");
    enunciado.appendChild(nodoTexto); // Añade el elemento texto a el elemento enunciado.
    actividad.appendChild(enunciado); // Añade el elemento enunciado a el elemento actividad.
    
    //creamos el formulario
    const FORMULARIO = ["alumno", "modulo 1", "modulo 2", "modulo 3"];
   
    FORMULARIO.forEach(e =>{
        //creacion del label
        var p = document.createElement("p"); // Crea el elemento.
        var la = document.createElement("label"); // Crea el elemento.
        la.setAttribute("for", e.replace(" ", "")); // // Esta quitando los espacios de cada elemento.
        nodoTexto = document.createTextNode(`${capitalize(e)}: `); // Crea el elemento texto.
        la.appendChild(nodoTexto); // Añade el elemento texto al alemento la como hijo.
        p.appendChild(la); // Añade el elemento la al elemento p como hijo.
        
        
        //creacion de los inputs
        var inp = document.createElement("input"); // Crea el elemento input.
        inp.setAttribute("type", "text"); // Añade el atributo type con valor text.
        inp.setAttribute("name", e.replace(" ", "")); // Esta quitando los espacios de cada elemento.
        inp.setAttribute("id", e.replace(" ", "")); // Esta quitando los espacios de cada elemento.
        p.appendChild(inp); // Añade al elemento p el elemento inp como hijo.
        
        //Metemos todo en el div
        actividad.appendChild(p);
    });

    //Generamos los botones para enviar
    var guardar = document.createElement("input");
    guardar.setAttribute("type", "submit");
    guardar.setAttribute("id", "guardar"); // Genera el boton guardar, con esos atributos.
    guardar.setAttribute("value", "Guardar");
    actividad.appendChild(guardar); // Añade el boton guardar al elemento actividad.

    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla"); // Genera el boton generar tabla, con esos atributos.
    generarTabla.setAttribute("value", "Generar Tabla");
    generarTabla.setAttribute("disabled", "");
    actividad.appendChild(generarTabla); // Añade el boton generar tabla al elemento actividad.

    // listeners
    document.getElementById("guardar").addEventListener('click', guardarAlumno); // Si se presiona el boton guardar llama a la funcion guardarAlumno.

    document.getElementById("generarTabla") // Si se presiona el boton generar tabla llama a la funcion crearTablaAlum.
            .addEventListener('click', () => {
                crearTablaAlum(FORMULARIO, ALUMNOS)
            });



    
}


/************************************
*
* Actividad 10 unidad 4
* 
************************************/
function generaTrece(){
    
    existeActividad();
    var actividad = document.getElementById("actividad");



    //Crea el enunciado
    var enunciado = document.createElement("blockquote"); // Crea el elemento blockquote
    var nodoTexto = document.createTextNode("13. Utilice el código empleado para la generación de las instancias del objeto Vehículo, y modifíquelo para que los valores de cada una de sus propiedades se impriman en una tabla HTML. Utilice la generación de código HTML desde código JavaScript. Cada instancia del objeto debeocupar una línea y el valor de cadapropiedad debe ocupar una celda de dicha línea. El resultado debe ser similar a:");
    enunciado.appendChild(nodoTexto); // añade a enunciiaso el nodo texto como hijo.
    actividad.appendChild(enunciado); // Añade enunciado al elemento actividad como hijo.
    
    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla"); // Crea y añade el boton generar tabla al elemento actividad.
    generarTabla.setAttribute("value", "Generar Tabla");
    actividad.appendChild(generarTabla);

    /*************************
     * Funciones locales
     * 
     *************************/

     /**
      * Genera una tabla con los vehiculos
      * @param  {...any} vehiculos 
      */
    function crearTablaCoche(...vehiculos){
        debugger;
        
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla")) // Si existe la tabla la borra.
        }
        
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla"); // Crea el elemento tabla con el id "tabla".
        
        // genera la cebecera de la tabla
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        const CABECERA = ["Marca", "Modelo", "Color", "Año de fabricación"]; // Crea los elementos thead y tr y el array CABECERA.
        
      
        for (e of CABECERA){
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(e);
            th.appendChild(nodoTexto); // Crea los elementos th y tr dinamicamente.
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead); // Añade los tr a los thead y finalmente a tabla como hijos.
    
        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody"); // Crea el tbody.
    
         for (let i = 0; i < vehiculos.length; i++){
            var tr = document.createElement("tr");
            
            for (const key in vehiculos[i]) {
                if (typeof vehiculos[i][key] != "function") { // Genera de forma dinamica el tbody con las filas de los coches.
                    var td = document.createElement("td");
                    nodoTexto = document.createTextNode(`${vehiculos[i][key]}`);
                    td.appendChild(nodoTexto);
                    tr.appendChild(td); // Añade los elementos texto a los td y los td a los tr como hijos.
                }
                
            }
            tbody.appendChild(tr); // Añade los tr al tbody.
        }
        tabla.appendChild(tbody);
        actividad.appendChild(tabla); // Añade el tbody a la tabla y la tabla al elemento actividad como hijo.
    
    }
    
    
    //Creamos los objetos
    function Vehiculo(marca, modelo, color,ano_fab){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ano_fab = ano_fab;
        this.arrancar = function(){
                let texto = "El coche de marca " +  this.marca // Modelo objeto vehiculo con sus atributos y la funcion arrancar.
                + " modelo " + this.modelo
                + " color " + this.color
                + " ha arrancado";
        console.log(texto);
        }
    }
    
    var coche1 = new Vehiculo("Ferrari", "Scaglietti", "Rojo", "2010");
    var coche2 = new Vehiculo("BMW", "Z4", "Blanco", "2010");
    var coche3 = new Vehiculo("Seat", "Toledo", "Azul", "1990"); // Se instancian objetos de tipo Vehiculo con sus atributos.
    var coche4 = new Vehiculo("Fiat", "500", "Verde", "1995");
    
    // listeners
 
    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaCoche(coche1, coche2, coche3, coche4) // Si se pulsa el boton generar tabla la genera con los datos de los coches.
            });

}

//Botones para generar las actividades
var boton6 = document.getElementById("ej6");
var boton10 = document.getElementById("ej10");
var content = document.getElementById("content"); // Botones que genera la actividad.

boton6.addEventListener("click", generaNueve);
boton10.addEventListener("click", generaTrece); // evento que detecta si pulso estos botones.