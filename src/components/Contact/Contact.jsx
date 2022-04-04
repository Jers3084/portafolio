import React, { useState } from "react";
import styles from "./Contact.module.css";
import github from "./img/github_icon.png";
import linkedin from "./img/linked_icon.png";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmitr = async (e) => {
    e.preventDefault();
    console.log(comentario);
    enviaremail();

    setNombre("");
    setEmail("");
    setComentario("");
    alert("Registro Enviado");
  };

  const enviaremail = async () => {
    try {
      const msg = {
        email: email,
        comentario: comentario,
      };

      fetch("http://35.192.83.171:5000/api/sendmail", {
        method: "post",
        mode: 'cors',
        body: JSON.stringify(msg), // data {object}
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

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
              setNombre(e.target.value);
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
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.fullentry}>
          <label
            htmlFor="validationCustomUsername"
            className={styles.formlabel}>
            Mensaje
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="Comentario"
            Value={comentario}
            required
            onChange={(e) => {
              setComentario(e.target.value);
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
        <a
          href="https://github.com/Jers3084?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          <img src={github} alt="" className={styles.img} />
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-eugenio-ricardez-de-los-santos-494b0810a"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} alt="" className={styles.img} />
        </a>
      </div>
    </div>
  );
};
