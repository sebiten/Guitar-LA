import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarra.server";
import { useState } from "react";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Guitarra no encontrada",
      description: "Guitarra no encontrada",
    };
  }
  return {
    title: `GuitarLa - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras`
  };
}

function Guitarra() {
  const {agregarCarrito} = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('Debes seleccionar al menos una cantidad')
      return
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
        <form 
        onSubmit={handleSubmit}
        className="formulario">
          <label htmlFor="Cantidad">Cantidad</label>
          <select 
          name="Cantidad" 
          id="Cantidad"
          onChange={ e => setCantidad(parseInt(e.target.value)) }
          >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value='Agregar al carrito' />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
