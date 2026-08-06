import "../../styles/dashboard/categoriasDashboard.css";

import labial from "../../assets/images/labialbarra.png";
import base from "../../assets/images/base.png";
import corrector from "../../assets/images/corrector.png";
import gloss from "../../assets/images/gloos.png";
import sombra from "../../assets/images/sombra.png";
import polvo from "../../assets/images/polvo.png";

function CategoriasDashboard({ setCategoriaSeleccionada }) {

    const categorias = [

        {
            nombre: "Todos",
            categoriaBD: "",
            imagen: base
        },

        {
            nombre: "Labiales",
            categoriaBD: "Labios",
            imagen: labial
        },

        {
            nombre: "Bases",
            categoriaBD: "Rostro",
            imagen: base
        },

        {
            nombre: "Correctores",
            categoriaBD: "Rostro",
            imagen: corrector
        },

        {
            nombre: "Gloss",
            categoriaBD: "Labios",
            imagen: gloss
        },

        {
            nombre: "Sombras",
            categoriaBD: "Ojos",
            imagen: sombra
        },

        {
            nombre: "Polvos",
            categoriaBD: "Rostro",
            imagen: polvo
        }

    ];

    return (

        <section className="categorias-dashboard">

            <div className="titulo-categorias-dashboard">

                <h2>Categorías</h2>

                <p>
                    Encuentra rápidamente el maquillaje que buscas.
                </p>

            </div>

            <div className="grid-categorias-dashboard">

                {

                    categorias.map((categoria) => (

                        <div
                            key={categoria.nombre}
                            className="card-categoria-dashboard"
                            onClick={() =>
                                setCategoriaSeleccionada(categoria.categoriaBD)
                            }
                        >

                            <img
                                src={categoria.imagen}
                                alt={categoria.nombre}
                            />

                            <h3>{categoria.nombre}</h3>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default CategoriasDashboard;