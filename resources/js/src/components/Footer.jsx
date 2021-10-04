// import { styles } from 'laravel-mix'
import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Footer.module.scss'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main}>
        <div>
          <h1 role="banner" className={styles.site_logo}>Pay-On</h1>
          <div className={styles.social_icons}>
            <Link to="#"><img src={instagram} alt="instagram icon" /></Link>
            <Link to="#"><img src={facebook} alt="facebook icon" /></Link>
            <Link to="#"><img src={twitter} alt="twitter icon" /></Link>
          </div>
        </div>
        <div className={styles.links_container}>
          <h3>Useful Links</h3>
          <ul className={styles.links}>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        <div className={styles.links_container}>
          <h3>Security</h3>
          <ul className={styles.links}>
            <li><Link to="#">Terms and Conditions</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Help Center</Link></li>
          </ul>
        </div>
        <div className={styles.links_container}>
          <h3>Contact</h3>
          <ul className={styles.links}>
            <li><Link to="#"><span>Email</span>: help@payon.com</Link></li>
            <li><Link to="#"><span>Call</span>: +2348000055555</Link></li>
            <li><Link to="#"><span>Whatsapp</span>: +2348000055555</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Pay-On - All rights reserved</p>
    </footer>
  )
}

export default Footer
