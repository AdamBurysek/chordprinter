import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import GetChordprinter from './components/getChordprinter/GetChordprinter';
import Hero from './components/hero/Hero';
import HowItWorks from './components/howItWorks/HowItWorks';
import './globals.css';
import styles from './page.module.css';

const Home = () => (
  <main className={styles.container}>
    <Hero />
    <HowItWorks />
    <Features />
    <GetChordprinter />
    <Footer />
  </main>
);

export default Home;
