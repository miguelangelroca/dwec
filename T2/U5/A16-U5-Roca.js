var ios = sessionStorage.getItem("ios");
var android = sessionStorage.getItem("android");
var windows = sessionStorage.getItem("windows");
var other = sessionStorage.getItem("other");

function vote() {
  element = document.querySelector('input[type="radio"]:checked');
  if (!element) {
    alert("Debe seleccionar al menos un elemento para poder votar.");
  } else {
    switch (element.id) {
      case "ios":
        if (ios === null) {
          ios = 1;
          sessionStorage.setItem("ios", ios);
          calc();
        } else {
          ios++;
          sessionStorage.setItem("ios", ios);
          calc();
        }
        break;
      case "android":
        if (android === null) {
          android = 1;
          sessionStorage.setItem("android", android);
          calc();
        } else {
          android++;
          sessionStorage.setItem("android", android);
          calc();
        }
        break;
      case "windows":
        if (windows === null) {
          windows = 1;
          sessionStorage.setItem("windows", windows);
          calc();
        } else {
          windows++;
          sessionStorage.setItem("windows", windows);
          calc();
        }
        break;
      case "other":
        if (other === null) {
          other = 1;
          sessionStorage.setItem("other", other);
          calc();
        } else {
          other++;
          sessionStorage.setItem("other", other);
          calc();
        }
        break;
    }
  }
}

function calc() {
  maxvotes = ios + android + windows + other;
  result = ((ios * 100) / maxvotes).toFixed(2);
  document.getElementById("bar_ios").value = result;

  result = ((android * 100) / maxvotes).toFixed(2);
  document.getElementById("bar_android").value = result;

  result = ((windows * 100) / maxvotes).toFixed(2);
  document.getElementById("bar_windows").value = result;

  result = ((other * 100) / maxvotes).toFixed(2);
  document.getElementById("bar_other").value = result;
}

window.onbeforeunload = () => sessionStorage.clear();
