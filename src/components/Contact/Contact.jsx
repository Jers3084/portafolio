import React, { useEffect, useState } from 'react'
import styles from './Contact.module.css';

export const Contact = () => {
  const [mensdcontacto, setMensdcontacto] = useState([])
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [comentario, setComentario] = useState('')

  return (
    <div>
      <form className={styles.formcontacto} >
        <h1 className={styles.titulo_contacto}>Contacto</h1>
        <div className={styles.contenedor_contacto}>
          <div className={styles.mb3}>
            <label htmlFor="Correo" className={styles.formlabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.formcontrol}
              id="Correo"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setCorreo(e.target.value)
              }}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="Telefono" className={styles.formlabel}>
              Telefono
            </label>
            <input
              type="tel"
              className={styles.formcontrol}
              id="Telefono"
              placeholder="Ingrese su numero telefonico"
              minLength={10}
              maxLength={10}
              required
              onChange={(e) => {
                setTelefono(e.target.value)
              }}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="Comentario" className={styles.formlabel}>
              Comentarios
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
        </div>
        <div className={styles.contenedor_boton}>
          <button type="submit" className={styles.boton}>
            Enviar
          </button>
        </div>
      </form>
      <footer className={styles.footer}>
        <p>Correo de contacto: jers@infinitummail.com</p>
      </footer>
    </div>
  )
}
