import "../styles/contacto.css";
import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviarFormulario = async (e) => {
    e.preventDefault();

    setEnviando(true);

    try {
      const response = await fetch("http://localhost:8082/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          mensaje,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el correo");
      }

      const resultado = await response.text();

      console.log(resultado);

      alert("✅ Tu mensaje fue enviado correctamente.");

      setNombre("");
      setCorreo("");
      setMensaje("");
    } catch (error) {
      console.error(error);

      alert("❌ No se pudo enviar el mensaje.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <section id="contacto" className="contacto">
        <div className="info-contacto">
          <span className="subtitulo">CONTÁCTANOS</span>

          <h2>Estamos para ayudarte</h2>

          <p>
            Si tienes alguna duda sobre nuestros productos o tu pedido,
            estaremos encantados de ayudarte.
          </p>

          <div className="datos-contacto">
            <p>
              <strong>📍 Dirección:</strong>
              <br />
              Universidad Tecnológica de Querétaro (UTEQ)
              <br />
              Av. Pie de la Cuesta 2501,
              <br />
              Santiago de Querétaro, Qro.
            </p>

            <p>
              <strong>📞 Teléfono:</strong>
              <br />
              442 123 4567
            </p>

            <p>
              <strong>📧 Correo:</strong>
              <br />
              contacto@altabelleza.com
            </p>

            <p>
              <strong>🕒 Horario:</strong>
              <br />
              Lunes a Viernes
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <form className="formulario" onSubmit={enviarFormulario}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <textarea
            rows="6"
            placeholder="Escribe tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button type="submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </section>

      <section className="mapa">
        <iframe
          title="Mapa UTEQ"
          src="https://www.google.com/maps?q=Universidad+Tecnol%C3%B3gica+de+Quer%C3%A9taro&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Contacto;