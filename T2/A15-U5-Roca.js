var num = sessionStorage.getItem("counter");

if (num == null) {
  num = 0;
}
num++;
sessionStorage.setItem("counter", num);
document.getElementById("counter").innerHTML = `${num}`;
