import { Link } from "react-router-dom";
import "../styles/legal.css";

function AvisoPrivacidad() {
  return (
<div id="privacidad" className="pagina-legal">
      <div className="contenedor-legal">

        <h1>Aviso de Privacidad</h1>

        <p className="fecha">
          Última actualización: Agosto 2026
        </p>

        <Link to="/" className="btn-volver">
          ← Regresar al Inicio
        </Link>

        <p>
          En <strong>Alta Belleza</strong> valoramos la privacidad de nuestros
          usuarios y nos comprometemos a proteger la información personal que
          nos proporcionan al utilizar nuestro sitio web.
        </p>

        <h2>Información que recopilamos</h2>

        <p>
          Durante el registro o el uso de nuestros servicios podemos recopilar:
        </p>

        <ul>
          <li>Nombre completo.</li>
          <li>Correo electrónico.</li>
          <li>Contraseña cifrada mediante algoritmos seguros.</li>
          <li>Información de pedidos realizados.</li>
          <li>Productos agregados a favoritos.</li>
          <li>Mensajes enviados desde el formulario de contacto.</li>
        </ul>

        <h2>Uso de la información</h2>

        <p>
          La información recopilada se utiliza únicamente para:
        </p>

        <ul>
          <li>Gestionar el registro de usuarios.</li>
          <li>Procesar pedidos.</li>
          <li>Administrar favoritos.</li>
          <li>Responder dudas enviadas desde el formulario de contacto.</li>
          <li>Mejorar la experiencia dentro del sitio web.</li>
        </ul>

        <h2>Protección de la información</h2>

        <p>
          Alta Belleza implementa mecanismos de seguridad para proteger los datos
          personales. Las contraseñas se almacenan cifradas y el acceso al sistema
          está protegido mediante autenticación y autorización por roles.
        </p>

        <h2>Derechos del usuario</h2>

        <p>
          El usuario puede solicitar la actualización o eliminación de su
          información personal comunicándose con nosotros mediante los medios de
          contacto disponibles en este sitio.
        </p>

        <h2>Contacto</h2>

        <p>
          Si tienes dudas acerca de este Aviso de Privacidad puedes escribirnos
          mediante el formulario de contacto disponible en Alta Belleza.
        </p>

      </div>

    </div>
  );
}

export default AvisoPrivacidad;