import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.site_header}>
      <h1 role="banner" className={styles.site_logo}>Pay-On</h1>

      <nav className={styles.site_nav} role="navigation">
        <ul>
          <li><Link className={styles.nav_links} to="#">Home</Link></li>
          <li><Link className={styles.nav_links} to="#">About Us</Link></li>
          <li><Link className={styles.nav_links} to="#">Services</Link></li>
          <li><Link className={styles.nav_links} to="#">Pricing</Link></li>
          <li><Link className={`btn-stroke ${styles.nav_btn_login} ${styles.nav_links}`} to="/login">Login</Link></li>
          <li><Link className={`btn-fill ${styles.nav_btn_register} ${styles.nav_links}`} to="/register">Register</Link></li>
        </ul>
        <div className={styles.menu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
