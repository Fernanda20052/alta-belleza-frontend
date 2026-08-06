import "../styles/toast.css";

function Toast({ mensaje, tipo, visible }) {

    return (

        <div
            className={`toast ${tipo} ${visible ? "mostrar" : ""}`}
        >

            {mensaje}

        </div>

    );

}

export default Toast;