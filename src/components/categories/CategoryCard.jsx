import "../../styles/categoryCard.css";
import BotonProtegido from "../BotonProtegido";

function CategoryCard({ imagen, nombre }) {

  return (

    <div className="category-card">

      <div className="category-image">

        <img
          src={imagen}
          alt={nombre}
        />

      </div>

      <h3>{nombre}</h3>

      <BotonProtegido
        titulo="Catálogo exclusivo"
        mensaje="Para explorar nuestros productos y realizar compras necesitas iniciar sesión o crear una cuenta."
      >
        Ver productos
      </BotonProtegido>

    </div>

  );

}

export default CategoryCard;