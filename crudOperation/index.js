let selectedRow = null;

function submitForm() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateForm(formData);
  }
  resetForm();
}

function validate() {
  //alert("validating");
  isValid = true;
  if (document.getElementById("fname").value == "") {
    isValid = false;
    alert("Enter your Full name Please");
  } else if (document.getElementById("email").value == "") {
    isValid = false;
    alert("Enter your Email Address Please");
  } else {
    isValid = true;
    //alert("true");
  }
  return isValid;
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fname").value;
  formData["email"] = document.getElementById("email").value;
  formData["city"] = document.getElementById("city").value;
  formData["country"] = document.getElementById("country").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document.getElementById("table");
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.city;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.country;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<input type="button" value="Edit" onclick="editFunction(this)"/><input  type="button" value="Delete" onclick="deleteFunction(this)"/> `;
}

//deleteButton.addEventListener("click", deleteFunction);

function resetForm() {
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("city").value = "";
  document.getElementById("country").value = "";
}

function editFunction(data) {
  selectedRow = data.parentElement.parentElement;
  document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("city").value = selectedRow.cells[2].innerHTML;
  document.getElementById("country").value = selectedRow.cells[3].innerHTML;
}

function updateForm(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.city;
  selectedRow.cells[3].innerHTML = formData.country;
}

function deleteFunction(data) {
  if (confirm("Are you sure to delete this record?")) {
    row = data.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();
  }
}
