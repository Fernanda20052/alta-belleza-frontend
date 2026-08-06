import { useState } from "react";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import CategoriasDashboard from "../components/dashboard/CategoriasDashboard";
import ProductosGrid from "../components/dashboard/ProductosGrid";
import FooterDashboard from "../components/dashboard/FooterDashboard";

function Dashboard() {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [textoBusqueda, setTextoBusqueda] = useState("");

    return (

        <>

            <DashboardNavbar
                textoBusqueda={textoBusqueda}
                setTextoBusqueda={setTextoBusqueda}
            />

            <CategoriasDashboard
                setCategoriaSeleccionada={setCategoriaSeleccionada}
            />

            <ProductosGrid
                categoriaSeleccionada={categoriaSeleccionada}
                textoBusqueda={textoBusqueda}
            />

            <FooterDashboard />

        </>

    );

}

export default Dashboard;