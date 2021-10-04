import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Auth.module.scss'

const AuthHeader = () => {
  return (
    <header className={styles.site_header}>
      <h1 role="banner" className={styles.site_logo}><Link to="/">Pay-On</Link></h1>
    </header>
  )
}

export default AuthHeader
