// import { styles } from 'laravel-mix';
import React from 'react';
import styles from '../styles/Home.module.scss'
import airtimeReachargeImg from '../assets/airtime-recharge.svg'
import electricityReachargeImg from '../assets/electricity-recharge.svg'
import cableSubImg from '../assets/cable-sub.svg'
import dataSubImg from '../assets/data-sub.svg'
import checkIcon from '../assets/check_icon.svg'
import Header from '../components/Header'
import Footer from '../components/Footer';

function Home() {

    let dots = []
    for(let i = 0; i < 49; i++) {
        dots.push(<div key={i} className={styles.dot}></div>)                        
    }
    
    return (
        <>
            <Header/>
            <main className={styles.home}>
                <section className={styles.onboarding}>
                    {/* <div className={styles.onboarding_left}> */}
                        <h2 className={styles.onboarding_header}>Easy, Fast and Reliable <br/> Digital Payment Solution <br /> For Everyone </h2>
                        <p className={styles.onboarding_text}>With Pay-On, you can  make all ypour payments, Airtime and Data recharge in just few clicks.</p>
                        <button className={`btn-fill ${styles.onboarding_cta}`}>Create Account</button>
                    {/* </div> */}
                    {/* <div className={styles.onboarding_right}> */}
                        <div className={styles.onboarding_bg}></div>
                        {/* <img src={phone} alt="woman holding phone" /> */}
                    {/* </div> */}
                </section>
                <section className={styles.platforms}>
                    <p className={styles.platform_brief}>The best Platform for Bills <br /> Payments and VTU Services</p>
                    <div className={styles.payment_solutions}>
                        <div className={styles.payment_solution}>
                            <img src={airtimeReachargeImg} />
                            <p>Airtime Recharge</p>
                        </div>
                        <div className={styles.payment_solution}>
                            <img src={dataSubImg} />
                            <p>Data Subscription</p>
                        </div>
                        <div className={styles.payment_solution}>
                            <img src={cableSubImg} />
                            <p>Cable Subscription</p>
                        </div>
                        <div className={styles.payment_solution}>
                            <img src={electricityReachargeImg} />
                            <p>Electricity Recharge</p>
                        </div>
                    </div>
                    <button className={`btn-stroke ${styles.sign_in}`} >Sign in</button>
                </section>
                <section className={styles.choose_us}>
                    <div className={styles.why_choose_us}>
                        <h2>Why Choose Us?</h2>
                        <p>We Offer Instant airtime  recharge,  Data bundle Subscription and Utilities Payment.</p>
                        <ul>
                            <li><img src={checkIcon} /> Fast</li>
                            <li><img src={checkIcon} /> Reliable</li>
                            <li><img src={checkIcon} /> 24/7 Customer Support</li>
                        </ul>
                    </div>
                    <div className={styles.person_img_container}>
                        <div className={styles.dots}>
                            {dots}
                        </div>
                        <div className={styles.choose_us_bg}></div>
                        {/* <img src={personOperatingDevice} alt="person operating device" /> */}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;

