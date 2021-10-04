import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/Auth.module.scss'
import AuthHeader from '../components/AuthHeader'

const Register = () => {
  document.title = 'Pay-On | Register'
  return (
    <>
      <AuthHeader />
      <main className={styles.main}>
        <form className={styles.form} action="">
          <h3>Create Account</h3>
          <input type="text" required name="firstName" id="" placeholder="First Name"/>
          <input type="text" required name="lastName" id="" placeholder="Last Name"/>
          <input type="text" required name="phoneNumber" id="" placeholder="Phone Number"/>
          <input type="text" required name="emailAddress" id="" placeholder="Email Address"/>
          <input type="text" required name="createPassword" id="" placeholder="Create Password"/>
          <input type="text" required name="confirmPassword" id="" placeholder="Confirm Password"/>
          <div className={styles.termsContainer}>
            <input type="checkbox" required name="agreeTerms" id="" />
            <label htmlFor="agreeTerms">I agree to pay-on <a className={styles.link} href="#">terms of use</a> and <a className={styles.link} href="#">privacy policy</a></label>
          </div>
          <input type="submit" className={`btn-fill`} value="Create Account" />
        </form>

        <p style={{fontWeight: "bold", fontSize: ".8rem"}}>Already a member? <Link className={styles.link} to='/login'>Login</Link></p>
      </main>
    </>
  )
}

export default Register
