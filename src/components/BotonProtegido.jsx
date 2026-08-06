import { useAuth } from "../context/AuthContext";

function BotonProtegido({
  children,
  className,
  onClick,
  titulo = "Acceso exclusivo",
  mensaje = "Para continuar necesitas iniciar sesión o crear una cuenta."
}) {

  const { usuario, abrirModal } = useAuth();

  const manejarClick = () => {

    if (!usuario) {

      abrirModal(titulo, mensaje);

      return;

    }

    if (onClick) {
      onClick();
    }

  };

  return (

    <button
      className={className}
      onClick={manejarClick}
    >

      {children}

    </button>

  );

}

export default BotonProtegido;