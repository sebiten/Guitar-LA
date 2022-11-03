import img from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre nosotros',
    description: 'Venta de guitarras y mas'
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



function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={img} alt="imagen sobre nosotros" />
          <div>
            <p>porem ipsum, dolor sit amet consectetur adipisicing elit. Facilis officia voluptate qui quisquam atque! Error, facilis voluptate repellendus tempore itaque adipisci nulla odio voluptas exercitationem minus praesentium, laboriosam quidem deserunt.</p>
            <p>porem ipsum, dolor sit amet consectetur adipisicing elit. Facilis officia voluptate qui quisquam atque! Error, facilis voluptate repellendus tempore itaque adipisci nulla odio voluptas exercitationem minus praesentium, laboriosam quidem deserunt.</p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros
