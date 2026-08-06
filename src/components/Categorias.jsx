import CategoryCard from "./categories/CategoryCard";

import base from "../assets/images/base.png";
import corrector from "../assets/images/corrector.png";
import gloss from "../assets/images/gloos.png";
import labial from "../assets/images/labialbarra.png";
import polvo from "../assets/images/polvo.png";
import sombra from "../assets/images/sombra.png";

function Categorias() {

    return (

        <section className="categorias">

            <div className="titulo-categorias">

                <span>EXPLORA</span>

                <h2>Nuestras Categorías</h2>

            </div>

            <div className="grid-categorias">

                <CategoryCard nombre="Labiales" imagen={labial}/>

                <CategoryCard nombre="Bases" imagen={base}/>

                <CategoryCard nombre="Correctores" imagen={corrector}/>

                <CategoryCard nombre="Gloss" imagen={gloss}/>

                <CategoryCard nombre="Polvos" imagen={polvo}/>

                <CategoryCard nombre="Sombras" imagen={sombra}/>

            </div>

        </section>

    );

}

export default Categorias;