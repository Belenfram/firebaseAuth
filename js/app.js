import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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

  const formLogin = document.querySelector("#formLogin");

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    signInWithEmailAndPassword(auth,email,password).then(cred=>{
      alert('Credenciales Correctas/signIn');
      console.log('credeciales correctas');
      //console.log(cred.user)
    }).catch(e=>{
      const errorCode = e.code;
      console.log(errorCode);
    })
  
  });