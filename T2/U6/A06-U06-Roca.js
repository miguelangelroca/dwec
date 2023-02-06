function show(id) {
  switch (id) {
    case "1":
      if (
        document.getElementById("p1").getAttribute("style") == "display: none"
      ) {
        document.getElementById("p1").setAttribute("style", "display: block");
      } else {
        document.getElementById("p1").setAttribute("style", "display: none");
      }
      break;
    case "2":
      if (
        document.getElementById("p2").getAttribute("style") == "display: none"
      ) {
        document.getElementById("p2").setAttribute("style", "display: block");
      } else {
        document.getElementById("p2").setAttribute("style", "display: none");
      }
      break;
    case "3":
      if (
        document.getElementById("p3").getAttribute("style") == "display: none"
      ) {
        document.getElementById("p3").setAttribute("style", "display: block");
      } else {
        document.getElementById("p3").setAttribute("style", "display: none");
      }
      break;
    case "4":
      if (
        document.getElementById("p4").getAttribute("style") == "display: none"
      ) {
        document.getElementById("p4").setAttribute("style", "display: block");
      } else {
        document.getElementById("p4").setAttribute("style", "display: none");
      }
      break;
    case "5":
      if (
        document.getElementById("p5").getAttribute("style") == "display: none"
      ) {
        document.getElementById("p5").setAttribute("style", "display: block");
      } else {
        document.getElementById("p5").setAttribute("style", "display: none");
      }
      break;
  }
}

function disable() {
  var x = document
    .querySelector('input[type="button"]')
    .getAttribute("disabled");

  if (x || x == "") {
    var element = document.querySelectorAll('input[type="button"]');
    console.log(element);
    element.forEach((e) => {
      e.removeAttribute("disabled");
    });
  } else {
    var element = document.querySelectorAll('input[type="button"]');
    console.log(element);
    element.forEach((e) => {
      e.setAttribute("disabled", "");
    });
  }
}
