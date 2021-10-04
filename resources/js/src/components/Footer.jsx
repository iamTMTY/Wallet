// import { styles } from 'laravel-mix'
import React from 'react'
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
            <a href="#"><img src={instagram} alt="instagram icon" /></a>
            <a href="#"><img src={facebook} alt="facebook icon" /></a>
            <a href="#"><img src={twitter} alt="twitter icon" /></a>
          </div>
        </div>
        <div className={styles.links_container}>
          <h3>Useful Links</h3>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
        <div className={styles.links_container}>
          <h3>Security</h3>
          <ul className={styles.links}>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Help Center</a></li>
          </ul>
        </div>
        <div className={styles.links_container}>
          <h3>Contact</h3>
          <ul className={styles.links}>
            <li><a href=""><span>Email</span>: help@payon.com</a></li>
            <li><a href=""><span>Call</span>: +2348000055555</a></li>
            <li><a href=""><span>Whatsapp</span>: +2348000055555</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Pay-On - All rights reserved</p>
    </footer>
  )
}

export default Footer
