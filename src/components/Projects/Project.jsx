import React from "react";
import styles from "./Project.module.css";
import proyectos from "./Projects.json";

export const Project = () => {
  return (
    <div>
      <div className={styles.contenido}>
        {proyectos.map((x, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.imagen_card}>
                <img
                  src={x.imagen}
                  alt=""
                  style={{ with: "130px", height: "200px" }}
                />
              </div>
              <div className={styles.title_card}>
                <h3>{x.nombre}</h3>
              </div>
              <div className={styles.descripcion_card}>
                <h3>{x.descripcion}</h3>
              </div>
              <a
                className={styles.descripcion_card}
                href={x.path}
                target="_blank"
                rel="noopener noreferrer">
                Ejecutar
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
