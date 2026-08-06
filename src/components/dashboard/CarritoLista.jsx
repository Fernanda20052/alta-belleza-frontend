import { useNavigate } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import imagenesProductos from "../../services/imagenesProductos";
import "../../styles/dashboard/carrito.css";

function CarritoLista() {

    const navigate = useNavigate();

    const {

        carrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        obtenerTotal

    } = useCarrito();

    const continuarCompra = () => {

        navigate("/checkout");

    };

    return (

        <section className="carrito">

            <h1>Mi carrito</h1>

            {

                carrito.length === 0 ?

                    (

                        <p className="carrito-vacio">

                            Tu carrito está vacío.

                        </p>

                    )

                    :

                    (

                        <>

                            {

                                carrito.map((producto) => (

                                    <div
                                        key={producto.id}
                                        className="producto-carrito"
                                    >

                                        <img
                                            src={`https://alta-belleza-backend-production.up.railway.app/uploads/${producto.imagen}`}
                                            alt={producto.nombre}
                                            onError={(e) => {
                                                e.target.src =
                                                    imagenesProductos[producto.imagen] || "";
                                            }}
                                        />

                                        <div className="info-producto">

                                            <h3>

                                                {producto.nombre}

                                            </h3>

                                            <p>

                                                Precio: ${producto.precio}

                                            </p>

                                            <div className="cantidad">

                                                <button
                                                    className="btn-cantidad"
                                                    onClick={() =>
                                                        disminuirCantidad(producto.id)
                                                    }
                                                >

                                                    -

                                                </button>

                                                <span>

                                                    {producto.cantidad}

                                                </span>

                                                <button
                                                    className="btn-cantidad"
                                                    onClick={() =>
                                                        aumentarCantidad(producto.id)
                                                    }
                                                >

                                                    +

                                                </button>

                                            </div>

                                            <p>

                                                Stock: {producto.stock}

                                            </p>

                                            <p>

                                                Subtotal: $

                                                {(producto.precio * producto.cantidad).toFixed(2)}

                                            </p>

                                        </div>

                                        <button
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarProducto(producto.id)
                                            }
                                        >

                                            Eliminar

                                        </button>

                                    </div>

                                ))

                            }

                            <div className="resumen">

                                <h2>

                                    Total: ${obtenerTotal().toFixed(2)}

                                </h2>

                                <button
                                    onClick={vaciarCarrito}
                                >

                                    Vaciar carrito

                                </button>

                                <button
                                    onClick={continuarCompra}
                                >

                                    Continuar compra

                                </button>

                            </div>

                        </>

                    )

            }

        </section>

    );

}

export default CarritoLista;