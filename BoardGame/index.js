function createBoard() {
  // alert("createTable");
  let k = 100;
  let table = document.getElementById("tab");
  for (let i = 0; i < 10; i++) {
    row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
      cell = row.insertCell(j);
      if (i % 2 == 0) {
        cell.innerHTML = k;
        k--;
      } else {
        cell.innerHTML = k;
        k++;
      }
    }
    if (i % 2 == 0) {
      k = k - 9;
    } else {
      k = k - 11;
    }
    if (k < 0) {
      return;
    }
  }
}

function createDice() {
  //alert("create Dice");
  let dice = document.getElementById("dice");
  let image = document.createElement("img");
  let dispBtn = document.createElement("button");
  image.src = "1.jpg";
  image.id = "img1";
  dispBtn.innerHTML = "Roll the Dice";
  //dispBtn.type = "submit";
  dispBtn.onclick = function () {
    //alert("Button is clicked");
    rollDice();
  };
  dice.appendChild(dispBtn);
  dice.appendChild(image);
}

function rollDice() {
  //alert("display dice");
  let div = document.getElementById("dice");
  let image = document.createElement("img");
  let num = Math.floor(Math.random() * 6 + 1);
  //alert(num);
  switch (num) {
    case 1:
      image.src = "1.jpg";
      break;
    case 2:
      image.src = "2.jpg";
      break;
    case 3:
      image.src = "3.jpg";
      break;
    case 4:
      image.src = "4.jpg";
      break;
    case 5:
      image.src = "5.jpg";
      break;
    case 6:
      image.src = "6.jpg";
      break;
  }
  image.id = "img2";
  div.appendChild(image);
}

function resetImg() {
  image.src = "";
}
