let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username =id("nombre"),
 apellidoDeUsuario =id("apellido"),
 email =id("correo"),
 textoDeUsuario =id("texto"),
 form =id("form")


 



 

errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(apellidoDeUsuario, 1, "Username cannot be blank");
  engine(email, 2, "Email cannot be blank");
  engine(textoDeUsuario, 3, "Password cannot be blank");
});



let engine = (id, pos, message) => {
  if (id.value.trim() === "") {
    errorMsg[pos].innerHTML = message;
    id.style.border = "2px solid red";

  
    failureIcon[pos].style.opacity = "1";
    successIcon[pos].style.opacity = "0";
  } else {
    errorMsg[pos].innerHTML = "";
    id.style.border = "2px solid green";

   
    failureIcon[pos].style.opacity = "0";
    successIcon[pos].style.opacity = "1";
  }
};
