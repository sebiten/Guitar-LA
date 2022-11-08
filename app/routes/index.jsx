import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listadoGuitarras";
import { getGuitarras } from "~/models/guitarra.server";
import { getPosts } from "~/models/post.server";
import stylesGuitarras from "~/styles/guitarra.css"
import stylesPosts from "~/styles/blog.css"
import { ListadoPosts } from "~/components/listadoPosts";

export function meta() {


}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesPosts
    }
  ]

}
export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data
  };
}

function Index() {
  const { guitarras, posts } = useLoaderData();

  return (
    <>
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
      <section className="contenedor">
      <ListadoPosts posts={posts} />
      </section>
      
    </main>
      
    </>
  );
}

export default Index;
