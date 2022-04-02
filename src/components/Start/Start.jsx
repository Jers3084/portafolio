import React from 'react'
import styles from './Start.module.css'
import imgjers from './img/DesarrolladorJERS.jpg'

export const Start = () => {
  return (
    <div>
      <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Portafolio Desarrollador WebFullStack</h1>
      <img src={imgjers} alt="" style={{width:'900px', height: '600px'}} className={styles.fotostart} />
      <h2 className={styles.parrafo_uno}>Hola, mi nombre es Jesus Eugenio Ricardez y soy Diseñador y Desarrollador Webfullstack</h2>
      <h2 className={styles.parrafo_dos}>Esta pagina esta diseñada para que conozcas mi trabajo, te invito a recorrerla y si te interesa lo que hago no dudes en contactarme.</h2>
      </div>
    </div>
  )
}
