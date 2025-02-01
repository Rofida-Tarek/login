var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var signUpBtn = document.getElementById("signup");
var alertMessage = document.getElementById("message");
var userContainer = [];
// if (localStorage.getItem != null) {
//   userContainer = JSON.parse(localStorage.getItem("user"));
// }
console.log(userContainer);
function signup() {
  var data = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };
  if (checkUserInput() == true) {
    getAlertMessage("All inputs is Required", "red");
  } else {
    if (checkEmail() == true) {
      getAlertMessage("Email Already Exist", "red");
    } else {
      userContainer.push(data);
      localStorage.setItem("user", JSON.stringify(userContainer));
      console.log(userContainer);
      clearForm();
      getAlertMessage(null, null);
    }
  }
}
function getAlertMessage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}
function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
}
function checkUserInput() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passInput.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmail() {
  for (var i = 0; i < userContainer.length; i++) {
    if (userContainer[i].email == emailInput.value) {
      return true;
    }
  }
}

signUpBtn.addEventListener("click", signup);
