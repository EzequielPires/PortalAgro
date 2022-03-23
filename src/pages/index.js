import Head from 'next/head'
import Logo from '../assets/logo_portal.svg';
import Whatsapp from '../assets/whatsapp.png';
import Facebook from '../assets/facebook.png';
import Youtube from '../assets/youtube.png';
import Google from '../assets/google.png';
import Persona from '../assets/persona.png';
import { Footer } from '../components/Footer';
import { FormContactStart } from '../components/FormContactStart';
import { SectionAbout } from '../components/SectionAbout';
import { SectionBudget } from '../components/SectionBudget';
import { SectionMockup } from '../components/SectionMockup';
import { SectionSales } from '../components/SectionSales';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portal Catalão</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src={Logo.src} alt="" />
      </header>
      <main className={styles.main}>
        <div className='container'>
          <div className='d-flex flex-wrap justify-content-between'>
            <div>
              <h1>A principal <span>ferramenta de vendas</span> do Agronegócio</h1>
              <FormContactStart />
            </div>
            <div className={styles.image_persona}>
              <img src={Whatsapp.src} alt={""} className={styles.ico_whatsapp}/>
              <img src={Facebook.src} alt={""} className={styles.ico_facebook}/>
              <img src={Google.src} alt={""} className={styles.ico_google}/>
              <img src={Youtube.src} alt={""} className={styles.ico_youtube}/>
              <img src={Persona.src} alt="" className={styles.ico_persona}/>
            </div>
          </div>
          <SectionAbout />
          <SectionMockup />
          <SectionSales />
        </div>
          <SectionBudget />
      </main>
      <Footer />
    </div>
  )
}