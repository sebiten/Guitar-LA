import { getPosts} from '~/models/post.server'
import { useLoaderData } from '@remix-run/react'
import Post from '~/components/post'
import styles from '~/styles/blog.css'

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
      <h2 className="heading">Blog</h2>
      <div className="blog">
       {posts.map(post => (
      <Post 
        key={post.id}
        post={post.attributes}
      
      />
    ))}
      </div>
    </main>
  )
}

export default Blog
