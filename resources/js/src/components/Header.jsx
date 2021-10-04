import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.site_header}>
      <h1 role="banner" className={styles.site_logo}>Pay-On</h1>

      <nav className={styles.site_nav} role="navigation">
        <ul>
          <li><a className={styles.nav_links} href="">Home</a></li>
          <li><a className={styles.nav_links} href="">About Us</a></li>
          <li><a className={styles.nav_links} href="">Services</a></li>
          <li><a className={styles.nav_links} href="">Pricing</a></li>
          <li><a className={`btn-stroke ${styles.nav_btn_login} ${styles.nav_links}`} href="">Login</a></li>
          <li><a className={`btn-fill ${styles.nav_btn_register} ${styles.nav_links}`} href="">Register</a></li>
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
