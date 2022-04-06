import React from "react";
import styles from "./Start.module.css";

export const Start = (props) => {
  return (
    <>
      {props.lang === "es-419" ||
      props.lang === "es" ||
      props.lang === "es-ES" ? (
        <div className={styles.contenedor}>
          <h1 className={styles.titulo}>
            Portafolio Desarrollador WebFullStack
          </h1>
          <div className={styles.fotostart}></div>
          <h2 className={styles.parrafo_uno}>
            Hola, mi nombre es Jesus Eugenio Ricardez y soy Diseñador y
            Desarrollador Webfullstack
          </h2>
          <h2 className={styles.parrafo_dos}>
            Esta pagina esta diseñada para que conozcas mi trabajo, te invito a
            recorrerla y si te interesa lo que hago no dudes en contactarme.
          </h2>
        </div>
      ) : (
        <div className={styles.contenedor}>
          <h1 className={styles.titulo}>WebFullStack Developer Portfolio</h1>
          <div className={styles.fotostart}></div>
          <h2 className={styles.parrafo_uno}>
            Hello, my name is Jesus Eugenio Ricardez and I am a Webfullstack
            Designer and Developer
          </h2>
          <h2 className={styles.parrafo_dos}>
            This page is designed so that you know my work, I invite you to go
            through it and if you are interested in what I do, do not hesitate
            to contact me.
          </h2>
        </div>
      )}
    </>
  );
};
