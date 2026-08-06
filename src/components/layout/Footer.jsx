import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h2>Alta Belleza</h2>

      <p>
        Tu tienda de maquillaje, skincare y accesorios de belleza.
      </p>

      <div className="footer-contenido">

        <div>

          <h3>Enlaces</h3>

          <ul className="footer-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#promociones">Promociones</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

        </div>

        <div>

          <h3>Información</h3>

          <ul className="footer-menu">
            <li>
              <Link to="/aviso-privacidad">
                Aviso de Privacidad
              </Link>
            </li>

            <li>
              <Link to="/terminos-condiciones">
                Términos y Condiciones
              </Link>
            </li>
          </ul>

        </div>

      </div>

      <p className="copyright">
        © 2026 Alta Belleza. Todos los derechos reservados.
      </p>

    </footer>
  );
}

export default Footer;