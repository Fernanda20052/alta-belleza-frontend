import { useEffect, useState } from "react";
import "../styles/admin/admin.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Admin() {

  const navigate = useNavigate();

const { cerrarSesion } = useAuth();

const salir = () => {

    cerrarSesion();

    navigate("/");

};

    const productoVacio = {

        id: null,

        imagen: null,

        nombre: "",

        descripcion: "",

        precio: "",

        stock: "",

        categoria: ""

    };

    const [producto, setProducto] = useState(productoVacio);

    const [productos, setProductos] = useState([]);

    const [editando, setEditando] = useState(false);

    useEffect(() => {

        obtenerProductos();

    }, []);

    const obtenerProductos = async () => {

        try {

            const respuesta = await fetch(
                "https://alta-belleza-backend-production.up.railway.app/api/productos"
            );

            const datos = await respuesta.json();

            setProductos(datos);

        } catch (error) {

            console.log(error);

        }

    };

    const cambiarValor = (e) => {

        setProducto({

            ...producto,

            [e.target.name]: e.target.value

        });

    };

    const cambiarImagen = (e) => {

        setProducto({

            ...producto,

            imagen: e.target.files[0]

        });

    };
    const editarProducto = (item) => {

    setProducto({

        id: item.id,

        imagen: null,

        nombre: item.nombre,

        descripcion: item.descripcion,

        precio: item.precio,

        stock: item.stock,

        categoria: item.categoria

    });

    setEditando(true);

};

const guardarProducto = async (e) => {

    e.preventDefault();

    try {

        if (editando) {

            const respuesta = await fetch(

                `https://alta-belleza-backend-production.up.railway.app/api/productos/${producto.id}`,

                {

                    method: "PUT",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        nombre: producto.nombre,

                        descripcion: producto.descripcion,

                        precio: producto.precio,

                        stock: producto.stock,

                        categoria: producto.categoria

                    })

                }

            );

            if (!respuesta.ok) {

                throw new Error();

            }

            alert("Producto actualizado.");

            setEditando(false);

        } else {

            const formData = new FormData();

            formData.append("imagen", producto.imagen);
            formData.append("nombre", producto.nombre);
            formData.append("descripcion", producto.descripcion);
            formData.append("precio", producto.precio);
            formData.append("stock", producto.stock);
            formData.append("categoria", producto.categoria);

            const respuesta = await fetch(

                "https://alta-belleza-backend-production.up.railway.app/api/productos",

                {

                    method: "POST",

                    body: formData

                }

            );

            if (!respuesta.ok) {

                throw new Error();

            }

            alert("Producto agregado.");

        }

        setProducto(productoVacio);

        obtenerProductos();

    } catch (error) {

        alert("Error al guardar.");

    }

};
   



    const eliminarProducto = async (id) => {

        if (!window.confirm("¿Eliminar producto?")) {

            return;

        }

        await fetch(

            `https://alta-belleza-backend-production.up.railway.app/api/productos/${id}`,

            {

                method: "DELETE"

            }

        );

        obtenerProductos();

    };

    return (

        <div className="admin-container">

            <h1>Panel Administrador</h1>
            <div
    style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "25px"
    }}
>

    <button
        className="btn-cerrar-admin"
        onClick={salir}
    >

        Cerrar sesión

    </button>

</div>

            <form

                className="admin-form"

                onSubmit={guardarProducto}

            >

<h2>

    {editando ? "Editar Producto" : "Agregar Producto"}

</h2>
               <input
    type="file"
    accept="image/*"
    onChange={cambiarImagen}
    required={!editando}
/>

                <input

                    type="text"

                    name="nombre"

                    placeholder="Nombre"

                    value={producto.nombre}

                    onChange={cambiarValor}

                    required

                />

                <input

                    type="number"

                    name="precio"

                    placeholder="Precio"

                    value={producto.precio}

                    onChange={cambiarValor}

                    required

                />

                <input

                    type="number"

                    name="stock"

                    placeholder="Stock"

                    value={producto.stock}

                    onChange={cambiarValor}

                    required

                />

                <select

                    name="categoria"

                    value={producto.categoria}

                    onChange={cambiarValor}

                    required

                >

                    <option value="">Categoría</option>

                    <option value="Rostro">Rostro</option>

                    <option value="Labios">Labios</option>

                    <option value="Ojos">Ojos</option>

                    <option value="Brochas">Brochas</option>

                </select>

                <textarea

                    name="descripcion"

                    placeholder="Descripción"

                    value={producto.descripcion}

                    onChange={cambiarValor}

                    rows="4"

                    required

                ></textarea>

                <button type="submit">

    {editando ? "Actualizar Producto" : "Guardar Producto"}

</button>

            </form>

            <div className="admin-productos">

                <h2>Productos registrados</h2>

                <table>

                    <thead>

                        <tr>

                            <th>Imagen</th>

                            <th>Nombre</th>

                            <th>Precio</th>

                            <th>Stock</th>

                            <th>Categoría</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody>

                   
                                            {

                            productos.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        style={{ textAlign: "center" }}
                                    >

                                        No hay productos registrados.

                                    </td>

                                </tr>

                            ) : (

                                productos.map((item) => (

                                    <tr key={item.id}>

                                        <td>

                                            <img
                                                src={`https://alta-belleza-backend-production.up.railway.app/uploads/${item.imagen}`}
                                                alt={item.nombre}
                                                className="admin-imagen"
                                            />

                                        </td>

                                        <td>

                                            {item.nombre}

                                        </td>

                                        <td>

                                            $

                                            {item.precio}

                                        </td>

                                        <td>

                                            {

                                                item.stock === 0

                                                    ? "Agotado"

                                                    : item.stock

                                            }

                                        </td>

                                        <td>

                                            {item.categoria}

                                        </td>

                                        <td>

               <button

    className="btn-editar"

    onClick={() => editarProducto(item)}

>

    Editar

</button>

                                            <button

                                                className="btn-eliminar"

                                                onClick={() => eliminarProducto(item.id)}

                                            >
  Eliminar

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            )

                        }
                         </tbody>


                </table>

            </div>

        </div>

    );

}

export default Admin;