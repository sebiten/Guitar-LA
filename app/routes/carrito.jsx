import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";
import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/carrito.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export function meta() {
  return {
    title: "GuitarLA - Carrito de compras",
    description: "Carrito de compras de las guitarras",
  };
}
function Carrito() {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={'cargando...'}>
      {() =>(
      <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">
          <div className="carrito">
            <h3>Articulos</h3>
            {carrito?.length === 0
              ? "Carrito Vacio"
              : carrito?.map((producto) => (
                  <div key={producto.id} className="producto">
                    <div>
                      <img
                        src={producto.imagen}
                        alt={`imagen del producto ${producto.nombre}`}
                      />
                    </div>
                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p>Cantidad: {producto.cantidad}</p>
                      <select
                        value={producto.cantidad}
                        className="select"
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: +e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="precio">
                        $<span>{producto.precio}</span>
                      </p>
                      <p className="subtotal">
                        Subtotal: $
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                      <button
                        onClick={() => eliminarGuitarra(producto.id)}
                        type="button"
                        className="btn-eliminar"
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
          </div>
          <aside className="resumen">
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
      )}
    </ClientOnly>
  );
}

export default Carrito;
