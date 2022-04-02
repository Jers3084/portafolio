import React, { useState } from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')


  const handleSubmitr = async (e) => {
    e.preventDefault()

    await enviarRegistro()
    setNombre('')
    setEmail('')
    setComentario('')
    alert('Registro Enviado')
  }

  const enviarRegistro = async () => {
    try {
      return fetch('http://35.192.83.171:9000/api/usuarios', {
        method: 'POST',
        body: JSON.stringify({ nombre, email,  comentario }), // data {object}
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        })
    } catch (e) {
      console.log('hubo un error')
      console.log(e)
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
          >
            Mensaje
          </label>
          <textarea
              className={styles.formcontrol}
              id="Comentario"
              rows={3}
              defaultValue={''}
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
      <hr className={styles.hr}/>
      </div>
    </div>
  )
}
