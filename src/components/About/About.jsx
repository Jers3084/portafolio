import React from 'react'
import styles from './About.module.css'
import foto from './img/foto.jpg'

export const About = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedor_uno}>
        <div className={styles.fotografia}>
          <img src={foto} alt="" className={styles.img}/>
        </div>
        <div className={styles.parrafo_uno}>
          <p className={styles.subparrafo1}>
            Mi nombre es <strong>Jesús Eugenio Ricardez de los Santos</strong> y
            soy
            <strong>“Desarrollador Web Fullstack”</strong>
          </p>
          <p className={styles.titulo2}>Mi objetivo profesional</p>
          <p className={styles.parrafo2}>
            Apoyar profesional y tecnológicamente a empresas grandes, medianas y
            pequeñas, así como a emprendedores y profesionales en el
            cumplimiento de su plan de negocios que generen valor y ser motor
            del desarrollo de las empresas.
          </p>
        </div>
      </div>
      <div className={styles.contenedor_dos}>
        <p className={styles.titulo3}>Formación Profesional</p>
        <ul className={styles.ul_uno}>
          <li className={styles.item_lista1}>
            Licenciatura en Electrónica en la Escuela de Ciencias de la
            Electrónica de la Benemérita Universidad Autónoma de Puebla.
            Ced.Prof. 2486450
          </li>
          <li className={styles.item_lista1}>
            Maestría en Dirección e Ingenieria de Software en la Universidad
            Tecnológica Latinoamericana en Línea UTEL. Ced.Prof. 12464154
          </li>
          <li className={styles.item_lista1}>
            Diplomado en Tecnologías de la Información.-Impartido por la empresa
            Asesoría en Redes y Telecomunicaciones ASERCOM
          </li>
          <li className={styles.item_lista1}>
            Capacitación continua en Administracion de Proyectos y Sistemas de
            Telecomunicaciones y Tecnologías de la Información.
          </li>
          <li className={styles.item_lista1}>
            BootCamp Desarrollo Web Full Stack.
          </li>
        </ul>
      </div>
      <div className={styles.contenedor_tres}>
        <p className={styles.titulo4}>
          Conocimientos y experiencia en Lenguajes, Frameworks, Librerías,
          Herramientas de Desarrollo, Plataformas Cloud, SO y Metodologías,
          como:
        </p>
        <p className={styles.parrafo3}>
          HTML, CSS, JAVASCRIPT, NODE JS, EXPRESS, REACT JS, BOOTSTRAP, GITHUB,
          VISUAL STUDIO CODE, GOOGLE CLOUD, HEROKU, VERCEL,WINDOWS, LINUX.
          SCRUM, KANBAN.
        </p>
        <p className={styles.titulo4}>Bases de Datos</p>
        <p className={styles.parrafo3}>MONGO DB, FIRE BASE, ROBO 3T</p>
        <p className={styles.titulo4}>Experiencia:</p>
        <ul className={styles.ul_uno}>
          <li className={styles.item_lista1}>
            Elaboración de Paginas Web dinámicas y responsivas.
          </li>
          <li className={styles.item_lista1}>Sistemas CRUD</li>
          <li className={styles.item_lista1}>Tienda en línea (e-commerce).</li>
          <li className={styles.item_lista1}>Sistemas Frontend y Backend.</li>
          <li className={styles.item_lista1}>
            Elaboración de sistemas de consumo y elaboración de API´s, Tableros
            de Datos (Dashboard).
          </li>
        </ul>
      </div>
      <div className={styles.contenedor_cuatro}>
        <div className={styles.columna_uno}>
          <p className={styles.titulo5}>Aptitudes</p>
          <hr className={styles.hr}/>
          <ul className={styles.ul_dos}>
            <li className={styles.item_lista2}>Honestidad</li>
            <li className={styles.item_lista2}>Lealtad</li>
            <li className={styles.item_lista2}>Proactividad</li>
            <li className={styles.item_lista2}>Disponibilidad</li>
            <li className={styles.item_lista2}>Proactividad</li>
            <li className={styles.item_lista2}>Liderazgo</li>
            <li className={styles.item_lista2}>Autodidacta</li>
            <li className={styles.item_lista2}>Creativo</li>
            <li className={styles.item_lista2}>Analítico</li>
            <li className={styles.item_lista2}>Sociable</li>
            <li className={styles.item_lista2}>Adaptabilidad</li>
          </ul>
        </div>
        <div className={styles.columna_media}>
          <p className={styles.titulo5}>y</p>
        </div>
        <div className={styles.columna_dos}>
          <p className={styles.titulo5}>Habilidades</p>
          <hr className={styles.hr}/>
          <ul className={styles.ul_dos}>
            <li className={styles.item_lista2}>Entendimiento de planes estratégicos</li>
            <li className={styles.item_lista2}>Trabajo en Equipo</li>
            <li className={styles.item_lista2}>Toma de decisiones</li>
            <li className={styles.item_lista2}>Capacidad de Análisis y Síntesis</li>
            <li className={styles.item_lista2}>Resolución de problemas</li>
            <li className={styles.item_lista2}>Rápido aprendizaje </li>
            <li className={styles.item_lista2}>Analítico</li>
            <li className={styles.item_lista2}> Desarrollo de Proyectos e Ingenierias</li>
          </ul>
        </div>
      </div>
      <div className={styles.pie_de_pagina}>
      <hr className={styles.hr}/>
      </div>
    </div>
  )
}
