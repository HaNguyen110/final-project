import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import Navigation from '../components/Navigation/navigation'
import Logo from '../components/Logo/logo'

export default function Home() {
  return (
    <div className={styles.container}>

      <Logo />
    
    </div>
  )
}
