import "../styles/nosotros.css";
import hero from "../assets/images/nosotros.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Nosotros() {
  return (
<section id="nosotros" className="nosotros">      <div className="contenido-nosotros">
        <div className="texto-nosotros">
          <span className="subtitulo">
            SOBRE ALTA BELLEZA
          </span>

          <h2>Más que maquillaje, una experiencia de belleza.</h2>

          <p>
            En <strong>ALTA BELLEZA</strong> creemos que la belleza va más allá
            del maquillaje. Queremos que cada persona se sienta segura,
            auténtica y confiada al utilizar productos de excelente calidad.
          </p>

          <p>
            Seleccionamos cuidadosamente cada producto para ofrecer una
            experiencia de compra elegante, segura y con atención personalizada.
          </p>

          <div className="redes-sociales">
            <a href="#" className="icono-social" title="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="icono-social" title="Instagram">
              <FaInstagram />
            </a>

            <a href="#" className="icono-social" title="TikTok">
              <FaTiktok />
            </a>

            <a href="#" className="icono-social" title="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="imagen-nosotros">
          <img src={hero} alt="Alta Belleza" />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;