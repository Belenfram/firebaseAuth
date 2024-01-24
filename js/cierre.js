import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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

    // Agrega el evento al botón de cerrar sesión
    const logoutButton = document.querySelector("#logoutButton");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        signOut(auth).then(() => {
          console.log("Sesión cerrada");
          window.location.href = '/index.html';
          // Puedes redirigir a la página de inicio u otra página después de cerrar sesión
        }).catch(error => {
          console.error("Error al cerrar sesión:", error);
        });
      });
    } else {
      console.error("Botón de cerrar sesión no encontrado");
    }