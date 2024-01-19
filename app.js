  /*import {app} from "./firebase.js"

  const form = document.forms['formLogin'];

  form.addEventListener('submit',handleForSubmit);

  function handleForSubmit(event){
    event.preventDefault();

    

    //console.log(`Correo: ${email}, Contraseña: ${password}`); 
    return loginUser(email, password);
  }*/

  function loginUser(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(`Correo: ${email}, Contraseña: ${password}`); 

    //metodo para la autenticación
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then((success) => {
      console.log('Credenciales correctas')
     })
     .catch((error) => {
      console.log(error);
     });
  }