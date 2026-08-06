import "../styles/promociones.css";

import labial from "../assets/images/labialbarra.png";
import sombra from "../assets/images/sombra.png";
import gloss from "../assets/images/gloos.png";

import BotonProtegido from "./BotonProtegido";

function Promociones() {
  return (
<section id="promociones" className="promociones">
      <div className="titulo-promociones">

        <span>OFERTAS EXCLUSIVAS</span>

        <h2>Promociones Especiales</h2>

        <p>
          Aprovecha nuestras mejores promociones por tiempo limitado y
          consiente tu belleza con los mejores productos.
        </p>

      </div>

      <div className="contenedor-promociones">

        <div className="promo-card">

          <div className="promo-imagen">
            <img src={labial} alt="Labial" />
          </div>

          <div className="promo-info">

            <span className="descuento">20% OFF</span>

            <h3>Labiales</h3>

            <p>
              Lleva cualquier labial de nuestra colección con un 20% de
              descuento.
            </p>

            <BotonProtegido
              titulo="Promoción exclusiva"
              mensaje="Para aprovechar esta promoción necesitas iniciar sesión o crear una cuenta."
            >
              Ver promoción
            </BotonProtegido>

          </div>

        </div>

        <div className="promo-card">

          <div className="promo-imagen">
            <img src={gloss} alt="Gloss" />
          </div>

          <div className="promo-info">

            <span className="descuento">ENVÍO GRATIS</span>

            <h3>Compras mayores a $799</h3>

            <p>
              Recibe tus productos sin costo de envío a cualquier parte de
              México.
            </p>

            <BotonProtegido
              titulo="Compra segura"
              mensaje="Inicia sesión para realizar compras y obtener envío gratis."
            >
              Comprar ahora
            </BotonProtegido>

          </div>

        </div>

        <div className="promo-card">

          <div className="promo-imagen">
            <img src={sombra} alt="Sombras" />
          </div>

          <div className="promo-info">

            <span className="descuento">2 x 1</span>

            <h3>Sombras</h3>

            <p>
              Compra una paleta y llévate otra completamente gratis.
            </p>

            <BotonProtegido
              titulo="Oferta exclusiva"
              mensaje="Para aprovechar esta oferta debes iniciar sesión o crear una cuenta."
            >
              Aprovechar oferta
            </BotonProtegido>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Promociones;