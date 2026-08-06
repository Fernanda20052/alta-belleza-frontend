import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Registro() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const registrar = async (e) => {

    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {

      const respuesta = await fetch("https://alta-belleza-backend-production.up.railway.app/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          contrasena,
        }),
      });

      const mensaje = await respuesta.text();

      alert(mensaje);

      if (mensaje === "Usuario registrado correctamente") {
        navigate("/login");
      }

    } catch (error) {
      alert("No fue posible conectar con el servidor.");
    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>ALTA BELLEZA</h1>

        <p>Crea una cuenta para continuar.</p>

        <form onSubmit={registrar}>

          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

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

          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
          />

          <button type="submit">
            Crear cuenta
          </button>

        </form>

        <p className="registro">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login">
            Inicia sesión
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Registro;