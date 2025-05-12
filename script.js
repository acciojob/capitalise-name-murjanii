function toUpperCaseOnBlur() {
  var inputField = document.getElementById("fname");
  inputField.value = inputField.value.toUpperCase();
}

window.onload = function() {
  var inputField = document.getElementById("fname");
  inputField.addEventListener("blur", toUpperCaseOnBlur);
};
