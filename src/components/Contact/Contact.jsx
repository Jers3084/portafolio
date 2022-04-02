import React, { useState } from 'react'
import styles from './Contact.module.css'


export const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')


  const handleSubmitr = async (e) => {
    e.preventDefault()

    enviarRegistro()
    setNombre('')
    setEmail('')
    setComentario('')
    alert('Registro Enviado')
  }

  const enviarRegistro = () => {
    
    const msg = {
      to: 'jers1968@gmail.com', // Change to your recipient
      from: 'jers@infinitummail.com', // Change to your verified sender
      subject: 'Solicitud de Informacion',
      text: 'Requiero informacion de los servicios de Vida Natura',
      html: 'Requiero informacion de los servicios de Vida Natura, Mi correo es: ',
    }
    
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Contacto</h2>
      <form className={styles.formato} onSubmit={handleSubmitr}>
        <div className={styles.fullentry}>
          <label htmlFor="validationCustom01" className={styles.formlabel}>
            Nombre
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="inputNombre"
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
        </div>

        <div className={styles.fullentry}>
          <label htmlFor="validationCustom02" className={styles.formlabel}>
            E-mail
          </label>
          <input
            type="email"
            className={styles.formcontrol}
            id="inputEmail"
            value={email}
            placeholder="Correo electronico"
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        
        <div className={styles.fullentry}>
          <label
            htmlFor="validationCustomUsername"
            className={styles.formlabel}
          >Mensaje</label>
          <textarea
              className={styles.formcontrol}
              id="Comentario"
              rows={3}
              Value={comentario}
              required
              onChange={(e) => {
                setComentario(e.target.value)
              }}
            />
        </div>

        <div className={styles.contenBoton}>
          <button className={styles.boton} type="submit">
            Enviar
          </button>
        </div>
      </form>
      <div className={styles.pie_de_pagina}>
      </div>
    </div>
  )
}
