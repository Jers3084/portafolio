import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/Logo_Developer_Rojo.png";
import styles from "./Navbar.module.css";
import icon from "./img/hamburger-menu.ico";

export const Navbar = (props) => {
  const [showlinks, setShowlinks] = useState(false);

  const pushbutton = () => {
    setShowlinks(!showlinks);
  };

  return (
    <>
      {props.lang === "es-419" ||
      props.lang === "es" ||
      props.lang === "es-ES" ? (
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <Link to="/" className="">
              <img
                src={logo}
                style={{ width: "120px", height: "60px" }}
                className={styles.logo}
                alt=""
              />
            </Link>
          </div>
          <div className={styles.right}>
            <ul className={styles.ul} id={showlinks ? styles.hidden : ""}>
              <li className={styles.li}>
                <Link to="/about" className={styles.link} onClick={pushbutton}>
                  Quien_Soy
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  to="/project"
                  className={styles.link}
                  onClick={pushbutton}>
                  Proyectos
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  to="/contact"
                  className={styles.link}
                  onClick={pushbutton}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <button className={styles.boton} onClick={pushbutton}>
            <img src={icon} alt="" style={{ width: "40px", height: "40px" }} />
          </button>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <Link to="/" className="">
              <img
                src={logo}
                style={{ width: "120px", height: "60px" }}
                className={styles.logo}
                alt=""
              />
            </Link>
          </div>
          <div className={styles.right}>
            <ul className={styles.ul} id={showlinks ? styles.hidden : ""}>
              <li className={styles.li}>
                <Link to="/about" className={styles.link} onClick={pushbutton}>
                  About me
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  to="/project"
                  className={styles.link}
                  onClick={pushbutton}>
                  Projects
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  to="/contact"
                  className={styles.link}
                  onClick={pushbutton}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button className={styles.boton} onClick={pushbutton}>
            <img src={icon} alt="" style={{ width: "40px", height: "40px" }} />
          </button>
        </nav>
      )}
    </>
  );
};
