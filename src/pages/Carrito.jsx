import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import CarritoLista from "../components/dashboard/CarritoLista";

function Carrito() {

    return (

        <>

            <DashboardNavbar
                textoBusqueda=""
                setTextoBusqueda={() => {}}
            />

            <CarritoLista />

        </>

    );

}

export default Carrito;