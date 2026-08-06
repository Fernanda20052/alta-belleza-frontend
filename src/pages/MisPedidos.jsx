import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import FooterDashboard from "../components/dashboard/FooterDashboard";
import { useAuth } from "../context/AuthContext";
import "../styles/dashboard/misPedidos.css";

function MisPedidos() {

    const { usuario } = useAuth();

    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        obtenerPedidos();

    }, []);

    const obtenerPedidos = async () => {

        try {

            const respuesta = await fetch(
                `https://alta-belleza-backend-production.up.railway.app/api/pedidos/usuario/${usuario}`
            );

            if (!respuesta.ok) {

                throw new Error("Error al obtener pedidos.");

            }

            const datos = await respuesta.json();

            const pedidosConDetalles = await Promise.all(

                datos.map(async (pedido) => {

                    try {

                        const respuestaDetalles = await fetch(
                            `https://alta-belleza-backend-production.up.railway.app/api/detalles/${pedido.id}`
                        );

                        if (!respuestaDetalles.ok) {

                            return {
                                ...pedido,
                                productos: []
                            };

                        }

                        const detalles = await respuestaDetalles.json();

                        return {
                            ...pedido,
                            productos: detalles
                        };

                    } catch {

                        return {
                            ...pedido,
                            productos: []
                        };

                    }

                })

            );

            setPedidos(pedidosConDetalles);

        } catch (error) {

            console.error(error);

        } finally {

            setCargando(false);

        }

    };

    const formatoFecha = (fecha) => {

        return new Date(fecha).toLocaleDateString("es-MX");

    };

    // FORMATO DE MONEDA MEXICANA
    const formatoDinero = (cantidad) => {

        return `$${Number(cantidad).toFixed(2)} MXN`;

    };

    return (

        <>

            <DashboardNavbar
                textoBusqueda=""
                setTextoBusqueda={() => {}}
            />

            <div className="mis-pedidos-container">

                <button
                    className="btn-volver"
                    onClick={() => navigate("/dashboard")}
                >

                    ← Regresar

                </button>

                <h1>Mis pedidos</h1>

                {

                    cargando ? (

                        <p>Cargando pedidos...</p>

                    ) : pedidos.length === 0 ? (

                        <p>Aún no has realizado ninguna compra.</p>

                    ) : (

                        pedidos.map((pedido) => (

                            <div
                                className="pedido-card"
                                key={pedido.id}
                            >

                                <h3>

                                    Pedido #{pedido.id}

                                </h3>

                                <p>

                                    <strong>Fecha:</strong> {formatoFecha(pedido.fecha)}

                                </p>

                                <p>

                                    <strong> Estado:</strong> {pedido.estado}

                                </p>

                                <hr />

                                <h4>

                                    Productos comprados

                                </h4>

                                {

                                    pedido.productos &&
                                    pedido.productos.length > 0 ? (

                                        pedido.productos.map((producto) => (

                                            <div
                                                key={producto.id}
                                                style={{ marginBottom: "18px" }}
                                            >

                                                <strong>

                                                    {producto.nombreProducto}

                                                </strong>

                                                <br />

                                                Cantidad: {producto.cantidad}

                                                <br />

                                                Precio: {formatoDinero(producto.precio)}

                                            </div>

                                        ))

                                    ) : (

                                        <p>

                                            No hay productos para mostrar.

                                        </p>

                                    )

                                }

                                <hr />

                                <h3>

                                    Total: {formatoDinero(pedido.total)}

                                </h3>

                            </div>

                        ))

                    )

                }

            </div>

            <FooterDashboard />

        </>

    );

}

export default MisPedidos;