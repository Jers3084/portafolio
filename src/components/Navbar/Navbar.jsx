import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/Logo_Developer_Rojo.png'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
        <Link to="/" className=''>
          <img src={logo} style={{width: '120px', height: '60px'}} className={styles.logo} alt="" />
          </Link>
        </div>
        <div className={styles.right}>
        <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="/about" className={styles.link}>
                About me
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/project" className={styles.link}>
                Projects
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  )
}
