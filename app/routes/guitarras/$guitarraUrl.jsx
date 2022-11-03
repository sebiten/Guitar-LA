import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarra.server";
import styles from "~/styles/guitarra.css";

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
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  );
}

export default Guitarra;
