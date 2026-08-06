import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import ProductosPage from "./pages/Productos";
import Dashboard from "./pages/Dashboard";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import MisPedidos from "./pages/MisPedidos";
import Favoritos from "./pages/Favoritos";
import Admin from "./pages/Admin";

// NUEVAS PÁGINAS
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";

import RutaProtegida from "./components/RutaProtegida";
import ModalAcceso from "./components/ModalAcceso";

function App() {

  const {
    modalAbierto,
    cerrarModal,
    modalTitulo,
    modalMensaje
  } = useAuth();

  return (
    <>

      <Routes>

        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Páginas legales */}
        <Route
          path="/aviso-privacidad"
          element={<AvisoPrivacidad />}
        />

        <Route
          path="/terminos-condiciones"
          element={<TerminosCondiciones />}
        />

        {/* Protegidas */}

        <Route
          path="/productos"
          element={
            <RutaProtegida>
              <ProductosPage />
            </RutaProtegida>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RutaProtegida>
              <Dashboard />
            </RutaProtegida>
          }
        />

        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />

        <Route
          path="/checkout"
          element={
            <RutaProtegida>
              <Checkout />
            </RutaProtegida>
          }
        />

        <Route
          path="/mis-pedidos"
          element={
            <RutaProtegida>
              <MisPedidos />
            </RutaProtegida>
          }
        />

        <Route
          path="/favoritos"
          element={
            <RutaProtegida>
              <Favoritos />
            </RutaProtegida>
          }
        />

        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />

      </Routes>

      <ModalAcceso
        abierto={modalAbierto}
        cerrar={cerrarModal}
        titulo={modalTitulo}
        mensaje={modalMensaje}
      />

    </>
  );

}

export default App;