import { getPosts} from '~/models/post.server'
import { Outlet } from '@remix-run/react'
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'StyleSheet',
      href: styles
    }
  ]
}

function Blog() {
 console.log(getPosts);

  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}

export default Blog
