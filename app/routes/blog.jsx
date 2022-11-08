import { getPosts} from '~/models/post.server'
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/blog.css'
import { ListadoPosts } from '~/components/listadoPosts'

export function meta(){ 
  return {
    title: 'GuitarLA - Blog',
    description: 'Blog GuitarLA'

  }
}


export function links() {
  return [
    {
      rel: 'StyleSheet',
      href: styles
    }
  ]
}


export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
 console.log(getPosts);

  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  )
}

export default Blog
