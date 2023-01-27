var dni = (names = birthday = email = web = password = passwordconfirm = "");
function comprobar(id, value) {
  if (value === "" || id === "") {
    return;
  }
  switch (id) {
    case "dni":
      if (!/^[0-9]{2}.[0-9]{3}.[0-9]{3}-[A-Z]{1}$/.test(value)) {
        alert("El DNI no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        dni = value;
      }
      break;
    case "name":
      if (
        !/^(?:[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙa-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+(?:\s+[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+){1,3})$/.test(
          value
        )
      ) {
        alert("El Nombre no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        names = value;
      }
      break;
    case "birthday":
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        alert("La fecha no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        birthday = value;
      }
      break;
    case "email":
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)) {
        alert("El email no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        email = value;
      }
      break;
    case "web":
      if (!/^(http):\/\/www.[A-Za-z0-9]+.[a-z]+$/.test(value)) {
        alert("La url no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        web = value;
      }
      break;
    case "password":
      if (!/^\w{8,10}$/.test(value)) {
        alert("La contraseña no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        password = value;
      }
      break;
    case "passwordconfirm":
      if (!/^\w{8,10}$/.test(value)) {
        alert("La contraseña no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        passwordconfirm = value;
      }
      break;
  }
}

function seeCookie() {
  cookie =
    document.cookie = `dni = ${dni}; name = ${names}; birthday = ${birthday}; email = ${email}; web = ${web}; password = ${password}; passwordconfirm = ${passwordconfirm}`;
  alert(cookie);
}

form.addEventListener("submit", function (e) {
  var password = document.getElementById("password"),
    passwordconfirm = document.getElementById("passwordconfirm");
  if (password != passwordconfirm) {
    alert("Las contraseñas no coinciden");
    e.preventDefault();
  }
});
