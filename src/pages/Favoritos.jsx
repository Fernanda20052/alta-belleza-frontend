import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import FooterDashboard from "../components/dashboard/FooterDashboard";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";
import imagenesProductos from "../services/imagenesProductos";
import "../styles/dashboard/favoritos.css";

function Favoritos() {

    const { usuario } = useAuth();

    const { agregarProducto } = useCarrito();

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        if (usuario) {

            obtenerFavoritos();

        }

    }, [usuario]);

    const obtenerFavoritos = async () => {

        try {

            const respuesta = await fetch(
                `http://localhost:8082/api/favoritos/${usuario}`
            );

            if (!respuesta.ok) {

                throw new Error("Error al obtener favoritos.");

            }

            const datos = await respuesta.json();

            setFavoritos(datos);

        } catch (error) {

            console.log(error);

        }

    };

    const eliminarFavorito = async (productoId) => {

        try {

            const respuesta = await fetch(

                `http://localhost:8082/api/favoritos/${usuario}/${productoId}`,

                {
                    method: "DELETE"
                }

            );

            if (!respuesta.ok) {

                throw new Error();

            }

            setFavoritos(

                favoritos.filter(

                    favorito => favorito.producto.id !== productoId

                )

            );

            toast.success("Producto eliminado de favoritos.");

        } catch {

            toast.error("No se pudo eliminar.");

        }

    };

    const agregarAlCarrito = (producto) => {

        agregarProducto(producto);

        toast.success("Producto agregado al carrito.");

    };

    return (

        <>

            <DashboardNavbar
                textoBusqueda=""
                setTextoBusqueda={() => {}}
            />

            <div className="favoritos-container">

                <h1>

                    ❤️ Mis Favoritos

                </h1>

                {

                    favoritos.length === 0 ? (

                        <div className="favoritos-vacio">

                            No tienes productos en favoritos.

                        </div>

                    ) : (

                        favoritos.map((favorito) => (

                            <div
                                key={favorito.id}
                                className="favorito-card"
                            >

                                <div className="favorito-imagen">

                                  <img
    src={`http://localhost:8082/uploads/${favorito.producto.imagen}`}
    alt={favorito.producto.nombre}
    onError={(e) => {
        console.log("No se encontró:", favorito.producto.imagen);

        e.target.src =
            imagenesProductos[favorito.producto.imagen] || "";
    }}
/>

                                </div>

                                <div className="favorito-info">

                                    <h2>

                                        {favorito.producto.nombre}

                                    </h2>

                                    <p>

                                        <strong>Categoría:</strong>{" "}

                                        {favorito.producto.categoria}

                                    </p>

                                    <p>

                                        <strong>Precio:</strong>{" "}

                                        ${favorito.producto.precio}

                                    </p>

                                    <p>

                                        <strong>Stock:</strong>{" "}

                                        {favorito.producto.stock}

                                    </p>

                                    <div className="favorito-botones">

                                        <button
                                            className="btn-carrito"
                                            onClick={() =>
                                                agregarAlCarrito(
                                                    favorito.producto
                                                )
                                            }
                                        >

                                            🛒 Agregar al carrito

                                        </button>

                                        <button
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarFavorito(
                                                    favorito.producto.id
                                                )
                                            }
                                        >

                                            ❤️ Eliminar

                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

            <FooterDashboard />

        </>

    );

}

export default Favoritos;