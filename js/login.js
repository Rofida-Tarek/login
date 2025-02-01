var emailLogInInput = document.getElementById("email");
var passLogInInput = document.getElementById("pass");
var btnLogIN = document.getElementById("login");
var alertMessage = document.getElementById("message");
var userContainer = [];
if (localStorage.getItem != null) {
  userContainer = JSON.parse(localStorage.getItem("user"));
}
console.log(userContainer);

function logIn() {
  if (checkInput() == true) {
    getAlertMessage("All inputs is Required", "red");
  } else {
    if (checkEmailPass() == true) {
      window.location.href = "home.html";
    } else {
      getAlertMessage("Email Or Password Incorrect", "red");
    }
  }
}

btnLogIN.addEventListener("click", logIn);
function checkInput() {
  if (emailLogInInput.value == "" || passLogInInput.value == "") {
    return true;
  }
}
function getAlertMessage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}
function checkEmailPass() {
  for (var i = 0; i < userContainer.length; i++) {
    if (
      userContainer[i].email == emailLogInInput.value &&
      userContainer[i].pass == passLogInInput.value
    ) {
      localStorage.setItem("userName", userContainer[i].name);
      return true;
    }
  }
}
