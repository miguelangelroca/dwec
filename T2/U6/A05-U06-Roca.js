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
  }
}
