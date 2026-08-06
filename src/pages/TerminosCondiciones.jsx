import { Link } from "react-router-dom";
import "../styles/legal.css";

function TerminosCondiciones() {
  return (
    <div className="pagina-legal">

      <div className="contenedor-legal">

        <h1>Términos y Condiciones</h1>

        <p className="fecha">
          Última actualización: Agosto 2026
        </p>

        <Link to="/" className="btn-volver">
          ← Regresar al Inicio
        </Link>

        <p>
          Bienvenido a <strong>Alta Belleza</strong>. Al acceder y utilizar este
          sitio web, aceptas los siguientes términos y condiciones de uso.
        </p>

        <h2>Uso del sitio</h2>

        <p>
          El usuario se compromete a utilizar este sitio de manera responsable,
          respetando las disposiciones legales y evitando cualquier actividad que
          afecte el funcionamiento de la plataforma.
        </p>

        <h2>Registro de usuarios</h2>

        <p>
          Para realizar compras es necesario crear una cuenta. El usuario es
          responsable de mantener la confidencialidad de sus credenciales de
          acceso.
        </p>

        <h2>Productos</h2>

        <p>
          Alta Belleza ofrece información sobre productos de maquillaje,
          skincare y accesorios. Las imágenes son ilustrativas y pueden variar
          ligeramente del producto real.
        </p>

        <h2>Pedidos</h2>

        <p>
          Los pedidos realizados quedan sujetos a disponibilidad de los
          productos. Una vez confirmado el pedido, el usuario podrá consultar
          su historial desde la sección "Mis Pedidos".
        </p>

        <h2>Responsabilidades</h2>

        <p>
          Alta Belleza se compromete a brindar un servicio confiable; sin
          embargo, no será responsable por interrupciones ocasionadas por
          mantenimiento, fallas técnicas o causas ajenas al sitio.
        </p>

        <h2>Propiedad intelectual</h2>

        <p>
          Todo el contenido del sitio, incluyendo logotipos, imágenes, textos y
          diseño, pertenece a Alta Belleza y no podrá reproducirse sin
          autorización.
        </p>

        <h2>Modificaciones</h2>

        <p>
          Alta Belleza podrá actualizar estos términos y condiciones cuando sea
          necesario para mejorar el servicio o cumplir con nuevas disposiciones.
        </p>

      </div>

    </div>
  );
}

export default TerminosCondiciones;