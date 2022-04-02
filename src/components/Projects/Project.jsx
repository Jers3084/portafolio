import React from 'react'
import styles from './Project.module.css'
import proyectos from './Projects.json'


export const Project = () => {
  return (
    <div>
      <h1>Project</h1>
          <div className={styles.contenido}>
            {proyectos.map((x, index) => {
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.imagen_card}>
                    <img src={x.imagen} alt="" />
                  </div>
                  <div className={styles.title_card}>
                    <h3>{x.nombre}</h3>
                  </div>
                  <div className={styles.descripcion_card}>
                    <h3>{x.descripcion}</h3>
                  </div>
                </div>
              )
            })}
          </div>

    </div>
  )
}
