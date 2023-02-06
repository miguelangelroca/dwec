elements = document.getElementsByTagName("*");
var div = document.createElement("div");
for (element of elements) {
  var p = document.createElement("p");
  var text = document.createTextNode(element.nodeName);
  p.appendChild(text);
  div.appendChild(p);
}
document.getElementById("container").appendChild(div);
