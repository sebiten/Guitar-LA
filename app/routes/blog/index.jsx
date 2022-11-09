import { getPosts} from '~/models/post.server'
import { useLoaderData } from '@remix-run/react'
import { ListadoPosts } from '~/components/listadoPosts'

export function meta(){ 
  return {
    title: 'GuitarLA - Blog',
    description: 'Blog GuitarLA'

  }
}
export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
 console.log(getPosts);

  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog
