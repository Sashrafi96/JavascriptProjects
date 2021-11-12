//alert("Hello");
let output = document.getElementById("res");

function button(a) {
  //alert(a);
  output.value += a;
  console.log(output.value);
}

function calculate() {
  //alert("inside calculate");
  let a = calc();
  document.getElementById("res").value = a;
}

function calc() {
  let res = [];
  //alert("Inside  calc function");
  if (output.value.includes("+")) {
    res = output.value.split("+");
    return parseInt(res[0]) + parseInt(res[1]);
  } else if (output.value.includes("-")) {
    res = output.value.split("-");
    return parseInt(res[0]) - parseInt(res[1]);
  } else if (output.value.includes("*")) {
    res = output.value.split("*");
    return parseInt(res[0]) * parseInt(res[1]);
  } else if (output.value.includes("/")) {
    res = output.value.split("/");
    return parseInt(res[0]) / parseInt(res[1]);
  } else if (output.value.includes("^")) {
    res = output.value.split("^");
    return Math.pow(parseInt(res[0]), parseInt(res[1]));
  }
}

function clrScr() {
  //alert("inside clear function");
  document.getElementById("res").value = "";
}
