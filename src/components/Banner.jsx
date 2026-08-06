import { useState } from "react";

function Banner() {
  const temporadas = [
    {
      mensaje: "🌸 ¡Descubre nuestra nueva colección de primavera!",
      clase: "banner-primavera",
    },
    {
      mensaje: "☀️ ¡Conoce nuestros productos ideales para el verano!",
      clase: "banner-verano",
    },
    {
      mensaje: "🍂 ¡Llegaron los nuevos tonos de otoño!",
      clase: "banner-otono",
    },
    {
      mensaje: "🎄 ¡Promociones navideñas disponibles!",
      clase: "banner-navidad",
    },
  ];

  const [indice, setIndice] = useState(0);

  const cambiarTemporada = () => {
    setIndice((indice + 1) % temporadas.length);
  };

  return (
    <div className={temporadas[indice].clase}>
      <p>{temporadas[indice].mensaje}</p>

      <button className="boton-temporada" onClick={cambiarTemporada}>
  Cambiar temporada
</button>
    </div>
  );
}

export default Banner;