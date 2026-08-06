import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

function Login() {

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const { iniciarSesion } = useAuth();

  const login = async (e) => {

    e.preventDefault();

    try {

const respuesta = await fetch("https://alta-belleza-backend-production.up.railway.app/auth/login", {
        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          correo,
          contrasena,

        }),

      });

      const mensaje = await respuesta.text();

      if (mensaje === "Inicio de sesión correcto") {

        iniciarSesion(correo);

        alert("¡Bienvenido a Alta Belleza!");

        setCorreo("");
        setContrasena("");

        // Si es el administrador
        if (correo.toLowerCase() === "admin@maquillaje.com") {

          navigate("/admin");

        } else {

          navigate("/dashboard");

        }

      } else {

        alert(mensaje);

      }

    } catch (error) {

      alert("No fue posible conectar con el servidor.");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>ALTA BELLEZA</h1>

        <p>Inicia sesión para continuar.</p>

        <form onSubmit={login}>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          <button type="submit">

            Iniciar sesión

          </button>

        </form>

        <p className="registro">

          ¿No tienes cuenta?{" "}

          <Link to="/registro">

            Regístrate aquí

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;