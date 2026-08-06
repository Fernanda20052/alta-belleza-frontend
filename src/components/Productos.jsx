import "../styles/productos.css";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ModalAcceso from "./ModalAcceso";

import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function Productos() {

    const [productos, setProductos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    const { usuario } = useAuth();

    useEffect(() => {

        const obtenerProductos = () => {

            fetch("http://localhost:8082/api/productos")
                .then((respuesta) => respuesta.json())
                .then((datos) => setProductos(datos))
                .catch((error) => console.error(error));

        };

        obtenerProductos();

        const intervalo = setInterval(obtenerProductos, 5000);

        return () => clearInterval(intervalo);

    }, []);

    const agregarAlCarrito = (producto) => {

        if (!usuario) {

            setMostrarModal(true);
            return;

        }

        alert(`"${producto.nombre}" agregado al carrito.`);

    };

    return (

        <section id="productos" className="productos">

            <div className="titulo-productos">

                <span>NUESTROS PRODUCTOS</span>

                <h2>Los más vendidos</h2>

                <p>
                    Descubre algunos de nuestros productos favoritos,
                    seleccionados especialmente para ti.
                </p>

            </div>

            <div className="grid-productos">

                {

                    productos.map((producto) => (

                        <div
                            className="card-producto"
                            key={producto.id}
                        >

                            <div className="imagen-producto">

                                <img
                                    src={`http://localhost:8082/uploads/${producto.imagen}`}
                                    alt={producto.nombre}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Sin+Imagen";
                                    }}
                                />

                            </div>

                            <div className="contenido-producto">

                                <h3>{producto.nombre}</h3>

                                <small>Alta Belleza</small>

                                <div className="estrellas">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>

                                <h4>${producto.precio} MXN</h4>

                                <div className="acciones-producto">

                                    <button
                                        className="favorito"
                                        onClick={() => {

                                            if (!usuario) {

                                                setMostrarModal(true);

                                            } else {

                                                alert("Producto agregado a favoritos.");

                                            }

                                        }}
                                    >

                                        <FaHeart />

                                    </button>

                                    <button
                                        className="comprar"
                                        onClick={() => agregarAlCarrito(producto)}
                                    >

                                        <FaShoppingCart />

                                        Agregar

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

            <ModalAcceso
                abierto={mostrarModal}
                cerrar={() => setMostrarModal(false)}
                titulo="Acceso exclusivo"
                mensaje="Para comprar productos, guardar favoritos y acceder a promociones exclusivas necesitas iniciar sesión o crear una cuenta."
            />

        </section>

    );

}

export default Productos;