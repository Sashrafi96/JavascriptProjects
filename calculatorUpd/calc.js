function button(a) {
  //alert(a);
  document.getElementById("res").value += a;
  console.log(document.getElementById("res").value);
}

function calculate() {
  //alert("inside calculate");
  a = eval(document.getElementById("res").value);
  document.getElementById("res").value = a;
}

function clrScr() {
  //alert("inside clear function");
  document.getElementById("res").value = "";
}
