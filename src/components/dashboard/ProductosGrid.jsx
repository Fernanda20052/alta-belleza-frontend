import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useCarrito } from "../../context/CarritoContext";
import { useAuth } from "../../context/AuthContext";
import imagenesProductos from "../../services/imagenesProductos";
import toast from "react-hot-toast";
import "../../styles/dashboard/productosGrid.css";

function ProductosGrid({
    categoriaSeleccionada,
    textoBusqueda
}) {

    const [productos, setProductos] = useState([]);

    const [favoritos, setFavoritos] = useState([]);

    const { agregarProducto } = useCarrito();

    const { usuario } = useAuth();

   useEffect(() => {

    obtenerProductos();

    if (usuario) {

        obtenerFavoritos();

    }

    const intervalo = setInterval(() => {

        obtenerProductos();

    }, 5000);

    return () => clearInterval(intervalo);

}, [usuario]);

    const obtenerProductos = async () => {

        try {

            const respuesta = await fetch("https://alta-belleza-backend-production.up.railway.app/api/productos");

            const datos = await respuesta.json();

            setProductos(datos);

        } catch (error) {

            console.log(error);

        }

    };

    const obtenerFavoritos = async () => {

        try {

            const respuesta = await fetch(

                `https://alta-belleza-backend-production.up.railway.app/api/favoritos/${usuario}`

            );

            if (!respuesta.ok) return;

            const datos = await respuesta.json();

console.log(datos);

setFavoritos(datos);

        } catch (error) {

            console.log(error);

        }

    };

    const favoritoExiste = (productoId) => {

        return favoritos.some(

            favorito => favorito.producto.id === productoId

        );

    };

   const agregarFavorito = async (productoId) => {

    try {

        const respuesta = await fetch(

            `https://alta-belleza-backend-production.up.railway.app/api/favoritos/${usuario}/${productoId}`,

            {

                method: "POST"

            }

        );

        if (!respuesta.ok) {

            const error = await respuesta.text();

            console.log(error);

            toast.error("Error al guardar favorito");

            return;

        }

        toast.success("Producto agregado a favoritos ❤️");

        obtenerFavoritos();

    } catch (error) {

        console.log(error);

        toast.error("No se pudo agregar.");

    }

};

    const eliminarFavorito = async (productoId) => {

        try {

            await fetch(

                `https://alta-belleza-backend-production.up.railway.app/api/favoritos/${usuario}/${productoId}`,

                {

                    method: "DELETE"

                }

            );

            toast.success("Eliminado de favoritos");

            obtenerFavoritos();

        } catch {

            toast.error("No se pudo eliminar.");

        }

    };

    const cambiarFavorito = (productoId) => {

        if (favoritoExiste(productoId)) {

            eliminarFavorito(productoId);

        } else {

            agregarFavorito(productoId);

        }

    };

    const agregarAlCarrito = (producto) => {

        agregarProducto(producto);

        toast.success(

            producto.nombre + " agregado al carrito."

        );

    };

    const productosFiltrados = productos.filter((producto) => {

        const coincideCategoria =

            categoriaSeleccionada === "" ||

            producto.categoria === categoriaSeleccionada;

        const coincideBusqueda =

            producto.nombre

                .toLowerCase()

                .includes(textoBusqueda.toLowerCase());

        return coincideCategoria && coincideBusqueda;

    });

    return (

        <section className="productos-dashboard">

            <div className="titulo-productos">

                <h2>

                    {

                        categoriaSeleccionada === ""

                            ? "Todos los productos"

                            : "Productos de " + categoriaSeleccionada

                    }

                </h2>

                <p>

                    Descubre nuestra colección de maquillaje.

                </p>

            </div>

            <div className="grid-productos">

                {

                    productosFiltrados.map((producto) => (

                        <div
                            key={producto.id}
                            className="card-producto"
                        >

                          <div

    className={

        favoritoExiste(producto.id)

            ? "corazon favorito"

            : "corazon"

    }

    onClick={() => cambiarFavorito(producto.id)}

>

    <FaHeart />

</div>

<img
    src={
        producto.imagen?.startsWith("http")
            ? producto.imagen
            : imagenesProductos[producto.imagen] || ""
    }
    alt={producto.nombre}
    onError={(e) => {
        e.target.src = imagenesProductos[producto.imagen] || "";
    }}
/>

                            <span className="categoria">

                                {producto.categoria}

                            </span>

                            <h3>

                                {producto.nombre}

                            </h3>

                            <p className="descripcion">

                                {producto.descripcion}

                            </p>

                            <h4>

                                ${producto.precio}

                            </h4>

                            <span className="stock">

                                Stock: {producto.stock}

                            </span>

                            <button

                                onClick={() => agregarAlCarrito(producto)}

                            >

                                Agregar al carrito

                            </button>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default ProductosGrid;