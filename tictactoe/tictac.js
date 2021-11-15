//alert("hello");
flag = 1;
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");

function func_1() {
  if (flag == 1) {
    b1.value = "X";
    b1.disabled = true;
    flag = 0;
  } else {
    b1.value = "0";
    b1.disabled = true;
    flag = 1;
  }
}

function func_2() {
  if (flag == 1) {
    b2.value = "X";
    b2.disabled = true;
    flag = 0;
  } else {
    b2.value = "0";
    b2.disabled = true;
    flag = 1;
  }
}
function func_3() {
  if (flag == 1) {
    b3.value = "X";
    b3.disabled = true;
    flag = 0;
  } else {
    b3.value = "0";
    b3.disabled = true;
    flag = 1;
  }
}
function func_4() {
  if (flag == 1) {
    b4.value = "X";
    b4.disabled = true;
    flag = 0;
  } else {
    b4.value = "0";
    b4.disabled = true;
    flag = 1;
  }
}
function func_5() {
  if (flag == 1) {
    b5.value = "X";
    b5.disabled = true;
    flag = 0;
  } else {
    b5.value = "0";
    b5.disabled = true;
    flag = 1;
  }
}
function func_6() {
  if (flag == 1) {
    b6.value = "X";
    b6.disabled = true;
    flag = 0;
  } else {
    b6.value = "0";
    b6.disabled = true;
    flag = 1;
  }
}
function func_7() {
  if (flag == 1) {
    b7.value = "X";
    b7.disabled = true;
    flag = 0;
  } else {
    b7.value = "0";
    b7.disabled = true;
    flag = 1;
  }
}
function func_8() {
  if (flag == 1) {
    b8.value = "X";
    b8.disabled = true;
    flag = 0;
  } else {
    b8.value = "0";
    b8.disabled = true;
    flag = 1;
  }
}

function func_9() {
  if (flag == 1) {
    b9.value = "X";
    b9.disabled = true;
    flag = 0;
  } else {
    b9.value = "0";
    b9.disabled = true;
    flag = 1;
  }
}

function reset_func() {
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
  b1.disabled = false;
  b2.disabled = false;
  b3.disabled = false;
  b4.disabled = false;
  b5.disabled = false;
  b6.disabled = false;
  b7.disabled = false;
  b8.disabled = false;
  b9.disabled = false;
  flag = 1;
  document.getElementById("won").innerHTML = "";
}

function checkfunc() {
  //alert("hello");
  console.log(b1.value, b2.value, b3.value);
  if (b1.value === "X" && b2.value === "X" && b3.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b4.value === "X" && b5.value === "X" && b6.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b7.value === "X" && b8.value === "X" && b9.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
  } else if (b1.value === "X" && b5.value === "X" && b9.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
  } else if (b3.value === "X" && b5.value === "X" && b7.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b1.value === "X" && b4.value === "X" && b7.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b2.disabled = true;
    b3.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b2.value === "X" && b5.value === "X" && b8.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b1.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b9.disabled = true;
  } else if (b3.value === "X" && b6.value === "X" && b9.value === "X") {
    document.getElementById("won").innerHTML = "Player 1 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
  } else if (b1.value === "0" && b2.value === "0" && b3.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b4.value === "0" && b5.value === "0" && b6.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b7.value === "0" && b8.value === "0" && b9.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
  } else if (b1.value === "0" && b5.value === "0" && b9.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
  } else if (b3.value === "0" && b5.value === "0" && b7.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b1.value === "0" && b4.value === "0" && b7.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b2.disabled = true;
    b3.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
  } else if (b2.value === "0" && b5.value === "0" && b8.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b1.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b9.disabled = true;
  } else if (b3.value === "0" && b6.value === "0" && b9.value === "0") {
    document.getElementById("won").innerHTML = "Player 2 won!!";
    b1.disabled = true;
    b2.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
  } else if (
    (b1.value == "X" || b1.value == "0") &&
    (b2.value == "X" || b2.value == "0") &&
    (b3.value == "X" || b3.value == "0") &&
    (b4.value == "X" || b4.value == "0") &&
    (b5.value == "X" || b5.value == "0") &&
    (b6.value == "X" || b6.value == "0") &&
    (b7.value == "X" || b7.value == "0") &&
    (b8.value == "X" || b8.value == "0") &&
    (b9.value == "X" || b9.value == "0")
  ) {
    document.getElementById("won").innerHTML = "Game Tie";
  }
}
