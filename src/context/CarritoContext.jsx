import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState(() => {

        const datos = localStorage.getItem("carrito");

        return datos ? JSON.parse(datos) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

    }, [carrito]);

    // Agregar producto
    const agregarProducto = (producto) => {

        const existe = carrito.find(
            item => item.id === producto.id
        );

        if (existe) {

            if (existe.cantidad >= existe.stock) {

                toast.error("No hay más unidades disponibles.");

                return;

            }

            setCarrito(

                carrito.map(item =>

                    item.id === producto.id

                        ? {
                            ...item,
                            cantidad: item.cantidad + 1
                        }

                        : item

                )

            );

        } else {

            setCarrito([

                ...carrito,

                {
                    ...producto,
                    cantidad: 1
                }

            ]);

        }

    };

    // Aumentar cantidad
    const aumentarCantidad = (id) => {

        setCarrito(

            carrito.map(producto => {

                if (producto.id !== id) {

                    return producto;

                }

                if (producto.cantidad >= producto.stock) {

                    toast.error("No hay más unidades disponibles.");

                    return producto;

                }

                return {

                    ...producto,
                    cantidad: producto.cantidad + 1

                };

            })

        );

    };

    // Disminuir cantidad
    const disminuirCantidad = (id) => {

        setCarrito(

            carrito.flatMap(producto => {

                if (producto.id !== id) {

                    return producto;

                }

                if (producto.cantidad === 1) {

                    return [];

                }

                return {

                    ...producto,
                    cantidad: producto.cantidad - 1

                };

            })

        );

    };

    // Eliminar producto
    const eliminarProducto = (id) => {

        setCarrito(

            carrito.filter(

                producto => producto.id !== id

            )

        );

    };

    // Vaciar carrito
    const vaciarCarrito = () => {

        setCarrito([]);

    };

    // Total de la compra
    const obtenerTotal = () => {

        return carrito.reduce(

            (total, producto) =>

                total + (producto.precio * producto.cantidad),

            0

        );

    };

    return (

        <CarritoContext.Provider

            value={{

                carrito,

                agregarProducto,

                aumentarCantidad,

                disminuirCantidad,

                eliminarProducto,

                vaciarCarrito,

                obtenerTotal

            }}

        >

            {children}

        </CarritoContext.Provider>

    );

}

export function useCarrito() {

    return useContext(CarritoContext);

}