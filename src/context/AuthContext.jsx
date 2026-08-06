import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(null);

    const [modalAbierto, setModalAbierto] = useState(false);

    const [modalTitulo, setModalTitulo] = useState("");

    const [modalMensaje, setModalMensaje] = useState("");

    useEffect(() => {

        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            setUsuario(usuarioGuardado);
        }

    }, []);

    const iniciarSesion = (correo) => {

        localStorage.setItem("usuario", correo);

        setUsuario(correo);

    };

    const cerrarSesion = () => {

        localStorage.removeItem("usuario");

        setUsuario(null);

    };

    const abrirModal = (titulo, mensaje) => {

        setModalTitulo(titulo);

        setModalMensaje(mensaje);

        setModalAbierto(true);

    };

    const cerrarModal = () => {

        setModalAbierto(false);

    };

    return (

        <AuthContext.Provider
            value={{

                usuario,

                iniciarSesion,

                cerrarSesion,

                modalAbierto,

                modalTitulo,

                modalMensaje,

                abrirModal,

                cerrarModal

            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}