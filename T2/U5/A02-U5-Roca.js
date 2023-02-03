box = document.getElementById("box");
key = document.addEventListener("keydown", event);
function event(key) {
  if (key.code == "ArrowRight") {
    box.style.left = box.offsetLeft + 10 + "px";
  } else if (key.code == "ArrowLeft") {
    box.style.left = box.offsetLeft - 20 + "px";
  } else if (key.code == "ArrowUp") {
    box.style.top = box.offsetTop - 20 + "px";
  } else if (key.code == "ArrowDown") {
    box.style.top = box.offsetTop + 10 + "px";
  }
}