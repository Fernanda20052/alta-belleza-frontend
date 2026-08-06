import { Link } from "react-router-dom";
import "../styles/modalAcceso.css";

function ModalAcceso({ abierto, cerrar, titulo, mensaje }) {

    if (!abierto) return null;

    return (

        <div className="modal-overlay">

            <div className="modal-acceso">

                <button
                    className="cerrar-modal"
                    onClick={cerrar}
                >
                    ×
                </button>

                <h2>💄 ALTA BELLEZA</h2>

                <h3>{titulo}</h3>

                <p>{mensaje}</p>

                <Link
                    to="/login"
                    className="btn-modal-login"
                >
                    Iniciar sesión
                </Link>

                <span className="separador">
                    ──────── o ────────
                </span>

                <Link
                    to="/registro"
                    className="btn-modal-registro"
                >
                    Crear cuenta
                </Link>

            </div>

        </div>

    );

}

export default ModalAcceso;