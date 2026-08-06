import "../styles/hero.css";
import hero from "../assets/images/hero.png";
import BotonProtegido from "./BotonProtegido";

function Hero() {

  const mes = new Date().getMonth() + 1;

  let subtitulo = "TU BELLEZA, NUESTRA PASIÓN";
  let titulo = (
    <>
      Descubre la belleza
      <br />
      <span>que hay en ti</span>
    </>
  );
  let descripcion =
    "Encuentra maquillaje, skincare y accesorios de las mejores marcas para resaltar tu belleza con productos originales y envíos a todo México.";

  if (mes === 2) {
    subtitulo = "💖 SAN VALENTÍN";
    titulo = (
      <>
        Enamórate de
        <br />
        <span>tu belleza</span>
      </>
    );
    descripcion =
      "Celebra el mes del amor con promociones especiales en maquillaje y skincare.";
  }

  if (mes === 5) {
    subtitulo = "🌸 DÍA DE LAS MADRES";
    titulo = (
      <>
        Regala
        <br />
        <span>belleza</span>
      </>
    );
    descripcion =
      "Sorprende a mamá con nuestros productos favoritos y promociones especiales.";
  }

  if (mes === 10) {
    subtitulo = "🎃 HALLOWEEN";
    titulo = (
      <>
        Maquillaje
        <br />
        <span>terroríficamente hermoso</span>
      </>
    );
    descripcion =
      "Descubre productos ideales para crear looks increíbles este Halloween.";
  }

  if (mes === 11) {
    subtitulo = "🛍️ BUEN FIN";
    titulo = (
      <>
        Las mejores
        <br />
        <span>ofertas del año</span>
      </>
    );
    descripcion =
      "Aprovecha descuentos exclusivos durante el Buen Fin.";
  }

  if (mes === 12) {
    subtitulo = "🎄 NAVIDAD";
    titulo = (
      <>
        Brilla en
        <br />
        <span>esta Navidad</span>
      </>
    );
    descripcion =
      "Encuentra los mejores regalos y luce espectacular en estas fiestas.";
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-contenido">

        <p className="hero-subtitulo">
          {subtitulo}
        </p>

        <h1 className="hero-titulo">
          {titulo}
        </h1>

        <p className="hero-descripcion">
          {descripcion}
        </p>

        <div className="hero-botones">

          <BotonProtegido
            className="btn-principal"
            titulo="Compra segura"
            mensaje="Para comprar productos necesitas iniciar sesión o crear una cuenta."
          >
            Comprar ahora
          </BotonProtegido>

          <BotonProtegido
            className="btn-secundario"
            titulo="Promociones exclusivas"
            mensaje="Para acceder a nuestras promociones exclusivas necesitas iniciar sesión o crear una cuenta."
          >
            Ver promociones
          </BotonProtegido>

        </div>

        <div className="hero-info">

          <div>
            <h3>100%</h3>
            <span>Productos originales</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Compra segura</span>
          </div>

          <div>
            <h3>🚚</h3>
            <span>Envíos a todo México</span>
          </div>

        </div>

      </div>

      <div className="hero-imagen">
        <img src={hero} alt="Alta Belleza" />
      </div>

    </section>
  );
}

export default Hero;