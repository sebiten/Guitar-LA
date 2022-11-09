import { Link } from "@remix-run/react"
import { fomatearFecha } from '../utils/helpers'
export default function Post({post}) {

  const {contenido, imagen, url, publishedAt, titulo} = post
  return (
    <article className='post'>
        <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen blog${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{fomatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`}>Leer articulo</Link>
        </div>
    </article>
  )
}