import {useLoaderData} from '@remix-run/react'
import { getGuitarras } from '~/models/guitarra.server'
import styles from '~/styles/guitarra.css'
import ListadoGuitarras from '~/components/listadoGuitarras'

export function meta() {
  return {
    title: 'GuitarLa - Tienda de guitarras',
    description: 'GuitarLa - Nuestra coleccion de guitarras '
  }
}
export function links() { 
return [
  {
    rel: 'stylesheet',
    href: styles
  }
]

}
export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoGuitarras 
        guitarras={guitarras}
      />
    </main>
  )
}

export default Tienda