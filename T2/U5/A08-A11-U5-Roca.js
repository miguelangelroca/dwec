document.addEventListener("submit", () => {
  var teacher = document.querySelector("select").value;
  document
    .getElementById("form")
    .setAttribute("action", `mailto:${teacher}@iesdonana.org`);
  document.getElementById("form").submit();
});

function day(value) {
  var options = document.getElementById("preferential");
  for (element of options) {
    if (element.value == value) {
      console.log(element.value);
      console.log(value);
      element.setAttribute("selected", "");
    }
  }
}

function change_color(value) {
  document.getElementById("form").style.backgroundColor = value;
}
