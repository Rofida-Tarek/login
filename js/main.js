var userName = document.getElementById("userName");
var btnLogOut = document.getElementById("btnlogout");
if (localStorage.getItem("userName") != null) {
  userName.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}
btnLogOut.addEventListener("click", function () {
  window.location.href = "index.html";
  localStorage.removeItem("userName");
});

// function logOut() {
//   window.location.href = "index.html";
//   localStorage.removeItem("userName");
// }
// btnLogOut.addEventListener("click", logOut);
