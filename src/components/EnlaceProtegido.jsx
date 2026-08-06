import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function EnlaceProtegido({
  to = "#",
  children,
  className,
  titulo = "Acceso exclusivo",
  mensaje = "Para acceder a esta sección necesitas iniciar sesión o crear una cuenta."
}) {

  const { usuario, abrirModal } = useAuth();

  const manejarClick = (e) => {

    if (!usuario) {

      e.preventDefault();

      abrirModal(titulo, mensaje);

    }

  };

  return (

    <Link
      to={to}
      className={className}
      onClick={manejarClick}
    >
      {children}
    </Link>

  );

}

export default EnlaceProtegido;