import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { fomatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css"

export function links() {
    return [
        {
        rel:'stylesheet',
        href: styles
        }
    ]
}
export function meta({ data }) {
    if (!data) {
      return {
        title: "Entrada no encontrada",
        description: "Guitarra no encontrada",
      };
    }
    return {
      title: `GuitarLa - ${data.data[0].attributes.titulo}`,
      description: `Guitarras blog`
    };
  }

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.lenght === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export default function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0].attributes;

  return (
    <article className="contenedor post mt-3">
    <h3 className="text-center">{titulo}</h3>
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`imagen blog${titulo}`}
      />
      <div className="contenido">

        <p className="fecha">{fomatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}
