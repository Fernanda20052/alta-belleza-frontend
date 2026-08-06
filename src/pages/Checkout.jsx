import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import {
    PayPalScriptProvider,
    PayPalButtons
} from "@paypal/react-paypal-js";

import "../styles/dashboard/checkout.css";

function Checkout() {

    const {
        carrito,
        obtenerTotal,
        vaciarCarrito
    } = useCarrito();

    const { usuario } = useAuth();

    const navigate = useNavigate();

    const [datos, setDatos] = useState({

        nombre: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        codigoPostal: ""

    });

    const cambiarValor = (e) => {

        setDatos({

            ...datos,

            [e.target.name]: e.target.value

        });

    };

    const enviarPedido = async () => {

        const pedido = {

            usuario,

            nombreCliente: datos.nombre,

            telefono: datos.telefono,

            direccion: datos.direccion,

            ciudad: datos.ciudad,

            codigoPostal: datos.codigoPostal,

            total: obtenerTotal(),

            productos: carrito.map(producto => ({

                id: producto.id,

                cantidad: producto.cantidad

            }))

        };

        const respuesta = await fetch(

            "https://alta-belleza-backend-production.up.railway.app/api/pedidos",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(pedido)

            }

        );

        if (!respuesta.ok) {

            throw new Error("Error al guardar el pedido.");

        }

        return await respuesta.json();

    };

    return (

        <>

            <DashboardNavbar
                textoBusqueda=""
                setTextoBusqueda={() => {}}
            />

            <div className="checkout-container">

                <div className="checkout-formulario">

                    <h1>

                        Finalizar compra

                    </h1>

                    <h3>

                        Información de envío

                    </h3>

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={datos.nombre}
                        onChange={cambiarValor}
                    />

                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={datos.telefono}
                        onChange={cambiarValor}
                    />

                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        value={datos.direccion}
                        onChange={cambiarValor}
                    />

                    <input
                        type="text"
                        name="ciudad"
                        placeholder="Ciudad"
                        value={datos.ciudad}
                        onChange={cambiarValor}
                    />

                    <input
                        type="text"
                        name="codigoPostal"
                        placeholder="Código Postal"
                        value={datos.codigoPostal}
                        onChange={cambiarValor}
                    />

                </div>

                <div className="checkout-resumen">

                    <h2>

                        Resumen de compra

                    </h2>

                    {

                        carrito.map((producto) => (

                            <div
                                className="producto-checkout"
                                key={producto.id}
                            >

                                <span>

                                    {producto.nombre} x {producto.cantidad}

                                </span>

                                <strong>

                                    $

                                    {(producto.precio * producto.cantidad).toFixed(2)}

                                </strong>

                            </div>

                        ))

                    }

                    <div className="linea"></div>

                    <div className="producto-checkout">

                        <span>

                            Envío

                        </span>

                        <strong>

                            Gratis

                        </strong>

                    </div>

                    <div className="linea"></div>

                    <div className="total">

                        <span>

                            Total

                        </span>

                        <strong>

                            ${obtenerTotal().toFixed(2)}

                        </strong>

                    </div>

                  <div style={{ marginTop: "25px" }}>

    <PayPalScriptProvider
        options={{
            clientId: "AdWhHh5Lb5Eu4kZfapdlV8H1G2o7B0VkBM1AbqU2VCMpqji4l2p443g4shGsrg_qufU-NOR5XL5Zu768",
            currency: "MXN"
        }}
    >
                            <PayPalButtons

                                style={{

                                    layout: "vertical",
                                    color: "gold",
                                    shape: "rect",
                                    label: "paypal"

                                }}

                                createOrder={(data, actions) => {

                                    return actions.order.create({

                                        purchase_units: [

                                            {

                                                amount: {

                                                    value: obtenerTotal().toFixed(2)

                                                }

                                            }

                                        ]

                                    });

                                }}

                                onApprove={(data, actions) => {

                                    return actions.order.capture().then(async (details) => {

                                        try {

                                            await enviarPedido();

                                            vaciarCarrito();

                                            alert(
                                                "¡Gracias por tu compra, " +
                                                details.payer.name.given_name +
                                                "!"
                                            );

                                            navigate("/dashboard");

                                        } catch (error) {

                                            console.error(error);

                                            alert(
                                                "El pago fue aprobado, pero ocurrió un error al guardar el pedido."
                                            );

                                        }

                                    });

                                }}

                                onError={(err) => {

                                    console.error(err);

                                    alert(
                                        "Ocurrió un error con PayPal."
                                    );

                                }}

                            />

                        </PayPalScriptProvider>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Checkout;