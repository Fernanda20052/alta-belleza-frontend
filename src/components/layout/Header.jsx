import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaShoppingBag, FaHeart } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/logo/log.png";
import "../../styles/header.css";

function Header() {

  const [mostrarMenu, setMostrarMenu] = useState(false);

  const { usuario, cerrarSesion } = useAuth();

  const navigate = useNavigate();

  const salir = () => {

    cerrarSesion();

    navigate("/");

  };

  return (

    <header className="header">

      <div className="logo-container">

        <RouterLink to="/">

          <img
            src={logo}
            alt="Alta Belleza"
            className="logo-img"
          />

        </RouterLink>

        <div className="logo-texto">

          <h2>ALTA BELLEZA</h2>

          <span>Beauty Store</span>

        </div>

      </div>

      <nav>

        <ul className="menu">

          <li>

            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Inicio
            </Link>

          </li>

          <li
            className="menu-productos"
            onMouseEnter={() => setMostrarMenu(true)}
            onMouseLeave={() => setMostrarMenu(false)}
          >

            <Link
              to="productos"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Productos
            </Link>

            {mostrarMenu && (

              <ul className="submenu">

                <li>Labiales</li>
                <li>Bases</li>
                <li>Correctores</li>
                <li>Sombras</li>
                <li>Brochas</li>
                <li>Skincare</li>

              </ul>

            )}

          </li>

          <li>

            <Link
              to="promociones"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Promociones
            </Link>

          </li>

          <li>

            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Nosotros
            </Link>

          </li>

          <li>

            <Link
              to="contacto"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Contacto
            </Link>

          </li>

        </ul>

      </nav>

      <div className="acciones">

        {!usuario ? (

          <div className="auth-buttons">

            <RouterLink
              to="/login"
              className="btn-login"
            >
              Iniciar sesión
            </RouterLink>

            <RouterLink
              to="/registro"
              className="btn-register"
            >
              Crear cuenta
            </RouterLink>

          </div>

        ) : (

          <>

            <FaHeart
              className="icono"
              title="Favoritos"
            />

            <FaShoppingBag
              className="icono"
              title="Carrito"
            />

            <div className="usuario-info">

              <span>

                Hola,

                <br />

                <strong>{usuario}</strong>

              </span>

              <button
                className="btn-logout"
                onClick={salir}
              >

                Cerrar sesión

              </button>

            </div>

          </>

        )}

      </div>

    </header>

  );

}

export default Header;