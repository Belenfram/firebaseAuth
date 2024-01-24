import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
//import "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js"; // Cambio en esta línea

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGxcIUwJziFEUWREs3crhZZCG0mCvkbro",
  authDomain: "aweb40-1884f.firebaseapp.com",
  projectId: "aweb40-1884f",
  storageBucket: "aweb40-1884f.appspot.com",
  messagingSenderId: "269676533678",
  appId: "1:269676533678:web:79e0990fec2339482a1a3f",
  measurementId: "G-7DKG47JE4N"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const registroForm = document.querySelector("#formRegistro");

  registroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#regEmail").value;
    const password = document.querySelector("#regPassword").value;
  
    createUserWithEmailAndPassword(auth,email,password).then(cred=>{
      alert('Usuario registrado');
      console.log('Usuario registrado');
      window.location.href = '/index.html';
    }).catch(e=>{
      const errorCode = e.code;
      if (errorCode === 'auth/email-already-in-use') {
        console.log("Correo ya existe");
      }else if(errorCode === 'auth/invalid-email'){
        console.log("Correo inválido");
      }else if (errorCode === 'auth/weak-password') {
        console.log("Contraseña no válida");
      }
      //console.log(errorCode);
    })
  
  });