import { useState, useRef, useEffect } from "react";
import {
    FaSearch,
    FaHeart,
    FaShoppingBag,
    FaUserCircle,
    FaBoxOpen,
    FaHome
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCarrito } from "../../context/CarritoContext";
import logo from "../../assets/logo/log.png";
import "../../styles/dashboard/dashboardNavbar.css";

function DashboardNavbar({ textoBusqueda, setTextoBusqueda }) {

    const { usuario, cerrarSesion } = useAuth();

    const { carrito } = useCarrito();

    const navigate = useNavigate();

    const [mostrarMenu, setMostrarMenu] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        const cerrarMenu = (e) => {

            if (menuRef.current && !menuRef.current.contains(e.target)) {

                setMostrarMenu(false);

            }

        };

        document.addEventListener("click", cerrarMenu);

        return () => document.removeEventListener("click", cerrarMenu);

    }, []);

    const salir = () => {

        cerrarSesion();

        navigate("/");

    };

    return (

        <header className="dashboard-navbar">

            <div className="dashboard-logo">

                <img
                    src={logo}
                    alt="Alta Belleza"
                />

                <div>

                    <h2>ALTA BELLEZA</h2>

                    <span>Tienda de belleza</span>

                </div>

            </div>

            <div className="dashboard-search">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Buscar maquillaje..."
                    value={textoBusqueda}
                    onChange={(e) => setTextoBusqueda(e.target.value)}
                />

            </div>

            <div className="dashboard-actions">

                <FaHeart
                    className="dashboard-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/favoritos")}
                />

                <Link
                    to="/carrito"
                    className="carrito-dashboard"
                >

                    <FaShoppingBag className="dashboard-icon" />

                    {

                        carrito.length > 0 && (

                            <span className="contador-carrito">

                                {

                                    carrito.reduce(

                                        (total, producto) => total + producto.cantidad,

                                        0

                                    )

                                }

                            </span>

                        )

                    }

                </Link>

                <div
                    className="dashboard-user"
                    ref={menuRef}
                    onClick={() => setMostrarMenu(!mostrarMenu)}
                    style={{ cursor: "pointer", position: "relative" }}
                >

                    <FaUserCircle className="dashboard-user-icon" />

                    <div>

                        <span>Hola</span>

                        <strong>{usuario}</strong>

                    </div>

                    {

                        mostrarMenu && (

                            <div className="menu-usuario">

                                <div
                                    className="menu-item"
                                    onClick={() => {

                                        navigate("/mis-pedidos");

                                        setMostrarMenu(false);

                                    }}
                                >

                                    <FaBoxOpen />

                                    <span>Mis pedidos</span>

                                </div>

                                <div
                                    className="menu-item"
                                    onClick={() => {

                                        navigate("/dashboard");

                                        setMostrarMenu(false);

                                    }}
                                >

                                    <FaHome />

                                    <span>Panel principal</span>

                                </div>

                            </div>

                        )

                    }

                </div>

                <button
                    className="dashboard-logout"
                    onClick={salir}
                >

                    Cerrar sesión

                </button>

            </div>

        </header>

    );

}

export default DashboardNavbar;