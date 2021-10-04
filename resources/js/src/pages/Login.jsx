import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Auth.module.scss'
import AuthHeader from '../components/AuthHeader'

const Login = () => {
  document.title = 'Pay-On | Login'
  return (
    <>
      <AuthHeader />
      <main className={styles.main}>
        <form className={styles.form} action="">
          <h3>Sign In</h3>
          <input required type="text" name="firstName" id="" placeholder="First Name"/>
          <input required type="text" name="lastName" id="" placeholder="Last Name"/>
          <Link style={{fontWeight: "bold", fontSize: ".8rem", marginBottom: "20px"}} className={styles.link} to="/resetpassword">Forgot Password?</Link>
          <input type="submit" className={`btn-fill`} value="Create Account" />
        </form>

        <p style={{fontWeight: "bold", fontSize: ".8rem"}}>Dont have an account yet? <Link className={styles.link} to='/register'>Create Account</Link></p>
      </main>
    </>
  )
}

export default Login
