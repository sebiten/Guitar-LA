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
  const { carrito } = useOutletContext();
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h3>Articulos</h3>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
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

                    <p className="precio">$<span>{producto.precio}</span></p>
                    <p className="subtotal">Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>

                  </div>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar</p>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;
