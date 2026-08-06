import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaProtegida({ children }) {

    const { usuario } = useAuth();

    const location = useLocation();

    if (!usuario) {

        // Si viene de cerrar sesión, regresar al inicio
        if (location.pathname === "/dashboard" ||
            location.pathname === "/carrito" ||
            location.pathname === "/favoritos" ||
            location.pathname === "/mis-pedidos" ||
            location.pathname === "/checkout") {

            return <Navigate to="/" replace />;
        }

        return <Navigate to="/login" replace />;

    }

    return children;

}

export default RutaProtegida;